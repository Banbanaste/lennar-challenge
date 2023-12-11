import Image from "next/image";
import { Inter } from "next/font/google";
import { Nav } from "@/components/nav";

export default function Home() {
  return (
    <main className="min-h-screen pt-6 px-4 bg-slate-900">
      <Nav />
    </main>
  );
}
