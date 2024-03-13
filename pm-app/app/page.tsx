
'use client'

import { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";
import Drawer from "./components/Drawer";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <Drawer />
      <Dashboard />
    </main>
  );
}
