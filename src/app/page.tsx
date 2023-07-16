import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "JobGPT | Home",
  description: "uses ChatGPT to help with job hunt",
};

export default function Home() {
  return (
    <>
      <header>
        <h2 className="text-center text-6xl border-2 border-black">
          Welcome to JobGPT
        </h2>
      </header>
      <div className="flex flex-auto justify-evenly border-2 border-blue-800">
        <div className="flex flex-auto border-red-100 border-2">
          Maybe some picture here
        </div>
        <div className="flex flex-auto border-fuchsia-300 border-2">
          <p>How to get started: Make an Account</p>
        </div>
      </div>
    </>
  );
}
