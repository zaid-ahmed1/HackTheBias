/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useState } from 'react';

const TARGET_DATE = new Date('2026-01-16T00:00:00');

function getTimeRemaining(targetDate: Date) {
  const total = targetDate.getTime() - new Date().getTime();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
}

function RollingDigit({ value }: { value: string }) {
  return (
    <div
      style={{
        display: 'inline-block',
        width: '60px',
        height: '80px',
        backgroundColor: '#1a1a1a',
        border: '2px solid #333',
        borderRadius: '8px',
        overflow: 'hidden',
        position: 'relative',
        margin: '0 2px',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          transform: `translateY(-${parseInt(value) * 80}px)`,
          transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <div
            key={num}
            style={{
              height: '80px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#8B5A8C',
              fontFamily: 'monospace',
              textShadow: '0 0 8px rgba(139, 90, 140, 0.5)',
            }}
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
}

function Separator() {
  return (
    <div
      style={{
        display: 'inline-block',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: '#8B5A8C',
        margin: '0 8px',
        textShadow: '0 0 8px rgba(139, 90, 140, 0.5)',
      }}
    >
      :
    </div>
  );
}

export default function ThreeCountdown() {
  const [time, setTime] = useState(getTimeRemaining(TARGET_DATE));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeRemaining(TARGET_DATE));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const days = `${time.days}`.padStart(3, '0');
  const hours = `${time.hours}`.padStart(2, '0');
  const minutes = `${time.minutes}`.padStart(2, '0');
  const seconds = `${time.seconds}`.padStart(2, '0');

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
      }}
    >
      {/* Days */}
      {days.split('').map((digit, i) => (
        <RollingDigit key={`day-${i}`} value={digit} />
      ))}

      <Separator />

      {/* Hours */}
      {hours.split('').map((digit, i) => (
        <RollingDigit key={`hour-${i}`} value={digit} />
      ))}

      <Separator />

      {/* Minutes */}
      {minutes.split('').map((digit, i) => (
        <RollingDigit key={`min-${i}`} value={digit} />
      ))}

      <Separator />

      {/* Seconds */}
      {seconds.split('').map((digit, i) => (
        <RollingDigit key={`sec-${i}`} value={digit} />
      ))}
    </div>
  );
}
