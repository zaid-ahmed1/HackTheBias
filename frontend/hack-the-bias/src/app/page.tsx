'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

useEffect(() => {
  fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/hello`)
    .then(res => res.json())
    .then(data => setMessage(data.message));
}, []);


  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold">Hackathon Platform</h1>
      <p className="mt-4 text-gray-700">Backend says: {message}</p>
    </main>
  );
}
