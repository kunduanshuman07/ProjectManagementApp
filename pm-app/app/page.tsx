
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
      <Dashboard loginverification={loading}/>
    </main>
  );
}
