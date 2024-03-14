
'use client'

import { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";
import Drawer from "./components/Drawer";
import { useRouter } from "next/navigation";
import { useSession } from 'next-auth/react';
export default function Home() {
  const { data } = useSession();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    if (data != null) {
      setLoading(false);
    }
  }, [data])
  const router = useRouter();
  const handleLogin = () => {
    router.push('/login');
  }
  return (
    <main>
      <Drawer />
      {loading ?
        <div className='flex flex-col p-10 rounded mt-20 '>
          <h1 className='font-bold text-center'>Please login to view Dashboard</h1>
          <button className='btn btn-accent text-white w-20 mx-auto mt-10 font-bold' onClick={handleLogin}>Login</button>
        </div>
        :
        <Dashboard />
      }
    </main>
  );
}
