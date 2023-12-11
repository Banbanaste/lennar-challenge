import Image from "next/image";
import { Navs } from "@/components/nav";
import { Toast } from "@/components/toast";

export default function Home() {
  return (
    <main className="min-h-screen pt-6 px-4 max-w-screen-xl mx-auto">
      <Navs />
      <Toast />
      <h1 className="text-4xl mt-4 leading-10 font-extrabold tracking-tight">
        A better way to
        <br /> <span className="text-indigo-400">ship web apps</span>
      </h1>
    </main>
  );
}
