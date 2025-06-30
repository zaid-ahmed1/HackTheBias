'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

useEffect(() => {
  fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}`)
    .then(res => res.json())
    .then(data => {
      console.log("API response:", data);
      setMessage(data.status);
    })
    .catch(err => console.log("API error:", err));
}, []);

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">Welcome to HackTheBias</h1>
      <p className="mt-4 text-gray-700">Backend Status: {message}</p>
      <p className="mt-4 text-gray-600">Landing page content goes here.</p>
    </main>
  );
}
