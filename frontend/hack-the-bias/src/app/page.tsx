async function getBackendStatus() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}`, { cache: 'no-store' });
    if (!res.ok) return "Failed to connect";
    
    const data = await res.json();
    return data.status;
  } catch (error) {
    console.error("API Error:", error);
    return "API is unavailable";
  }
}

export default async function Home() {
  const message = await getBackendStatus();

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">Welcome to HackTheBias</h1>
      <p className="mt-4 text-gray-700">Backend Status: {message}</p>
      <p className="mt-4 text-gray-600">Landing page content goes here.</p>
    </main>
  );
}