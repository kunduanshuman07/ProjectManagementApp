
'use client'
import Link from 'next/link';

export default function Home() {
  return (
      <main className="p-4">
        <Link href="/projects">Projects</Link>
        <Link href="/login">Login</Link>
      </main>
  );
}
