/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Image as DreiImage } from '@react-three/drei';
import Image from 'next/image';

interface Sponsor {
  name: string;
  logo: string;
}

interface FloatingLogoProps {
  sponsor: Sponsor;
  position: [number, number, number];
  index: number;
}

function FloatingLogo({ sponsor, position, index }: FloatingLogoProps) {
  const logoRef = useRef<any>(null!);
  const textRef = useRef<any>(null!);

  const floatSpeed = 0.8 + index * 0.1;
  const rotationSpeed = 0.3 + index * 0.05;

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    if (logoRef.current) {
      // Gentle floating motion
      logoRef.current.position.y =
        position[1] + Math.sin(time * floatSpeed) * 0.2;
      // Slow rotation
      logoRef.current.rotation.y = Math.sin(time * rotationSpeed) * 0.3;
    }

    if (textRef.current) {
      // Text follows logo with slight offset
      textRef.current.position.x = position[0];
      textRef.current.position.y =
        position[1] - 1 + Math.sin(time * floatSpeed) * 0.1;
      textRef.current.position.z = position[2] + 0.5;
    }
  });

  return (
    <group>
      {/* Floating logo */}
      <DreiImage
        ref={logoRef}
        url={sponsor.logo}
        position={position}
        scale={[2, 1.2]}
        transparent
      />

      {/* Sponsor name */}
      <Text
        ref={textRef}
        position={[position[0], position[1] - 1, position[2] + 0.5]}
        fontSize={0.3}
        color="#8B5A8C"
        anchorX="center"
        anchorY="middle"
      >
        {sponsor.name}
      </Text>
    </group>
  );
}

function FloatingGrid({ sponsors }: { sponsors: Sponsor[] }) {
  // Create a grid layout
  const positions: [number, number, number][] = sponsors.map((_, index) => {
    const cols = Math.ceil(Math.sqrt(sponsors.length));
    const row = Math.floor(index / cols);
    const col = index % cols;

    const spacingX = 3;
    const spacingY = 3;
    const offsetX = ((cols - 1) * spacingX) / 2;
    const offsetY = ((Math.ceil(sponsors.length / cols) - 1) * spacingY) / 2;

    return [col * spacingX - offsetX, row * spacingY - offsetY, 0];
  });

  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      style={{ background: 'transparent' }}
      gl={{ antialias: false, alpha: true }}
    >
      {/* Simple lighting */}
      <ambientLight intensity={0.8} />
      <pointLight position={[2, 2, 5]} intensity={0.4} />

      {sponsors.map((sponsor, index) => (
        <FloatingLogo
          key={sponsor.name}
          sponsor={sponsor}
          position={positions[index]}
          index={index}
        />
      ))}
    </Canvas>
  );
}

// Simple 2D fallback
function FallbackSponsors({ sponsors }: { sponsors: Sponsor[] }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
        padding: '20px',
      }}
    >
      {sponsors.map((sponsor) => (
        <div
          key={sponsor.name}
          style={{
            background: 'white',
            padding: '20px',
            borderRadius: '12px',
            textAlign: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }}
        >
          <Image
            src={sponsor.logo}
            alt={sponsor.name}
            width={200}
            height={60}
            style={{
              maxWidth: '100%',
              height: '60px',
              objectFit: 'contain',
              marginBottom: '10px',
            }}
          />
          <div style={{ color: '#8B5A8C', fontWeight: 'bold' }}>
            {sponsor.name}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function SponsorEcosystemDisplay({
  sponsors,
}: {
  sponsors: Sponsor[];
}) {
  const [mounted, setMounted] = useState(false);
  const [use3D, setUse3D] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl');
      if (!gl) setUse3D(false);
    } catch {
      setUse3D(false);
    }
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        style={{
          width: '100%',
          height: '200px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Loading sponsors...
      </div>
    );
  }

  if (!use3D) {
    return (
      <div
        style={{
          width: '100%',
          minHeight: '200px',
          padding: '0',
        }}
      >
        <FallbackSponsors sponsors={sponsors} />
      </div>
    );
  }

  return (
    <div
      style={{
        width: '100%',
        height: '300px',
        position: 'relative',
        margin: '0',
        padding: '0',
      }}
    >
      <FloatingGrid sponsors={sponsors} />
    </div>
  );
}
