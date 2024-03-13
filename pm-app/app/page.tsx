
'use client'

import { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";
import Drawer from "./components/Drawer";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    if (localStorage?.getItem('user') === null) {
      router.push('/login');
    }
    else {
      setUser('logged in');
    }
  }, [])
  return (
    <main>
      {user === null ?
        <div className="flex flex-row">
          <div className='m-auto mt-20'>
            <span className="loading loading-bars text-neutral loading-lg ml-2"></span>
            <span className="loading loading-bars text-neutral loading-lg ml-2"></span>
            <span className="loading loading-bars text-neutral loading-lg ml-2"></span>
          </div>
        </div> :
        <>
          <Drawer />
          <Dashboard />
        </>}
    </main>
  );
}
