
'use client'

import Dashboard from "./components/Dashboard";
import Drawer from "./components/Drawer";

export default function Home() {
  return (
      <main>
        <Drawer />
        <Dashboard/>
      </main>
  );
}
