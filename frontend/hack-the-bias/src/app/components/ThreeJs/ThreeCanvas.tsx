'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import { Mesh } from 'three';
import { useFrame } from '@react-three/fiber';

function SpinningCube() {
  const meshRef = useRef<Mesh>(null!);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}

export default function ThreeCanvas() {
  return (
    <Canvas style={{ height: '500px', width: '100%' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <SpinningCube />
      <OrbitControls />
    </Canvas>
  );
}
