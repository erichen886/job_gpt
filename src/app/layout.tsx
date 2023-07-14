import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JobGPT",
  description: "uses ChatGPT to help with job hunt",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-100 flex flex-col h-screen`}
      >
        <nav className="flex justify-between items-center text-lg border-b-2 border-black h-24">
          <div className="border-2 border-black ml-2">
            <Link href="/interview_questions">Interview Q&A</Link>
            <Link href="/answers">Jobs</Link>
            <Link href="/answers">Settings</Link>
          </div>
          <div className="border-2 border-black">
            <h2 className="text-lg">JOBGPT</h2>
          </div>
          <div className="border-2 border-black mr-2">
            Notifications and dark light mode
          </div>
        </nav>
        <main className="flex-auto">{children}</main>
        <footer className="flex justify-between items-center text-lg border-t-2 border-black h-24">
          <div>2023 c</div>
          <div>Created by erichen886</div>
          <div>Other stuff</div>
        </footer>
      </body>
    </html>
  );
}
