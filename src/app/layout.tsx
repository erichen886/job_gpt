import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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
        className={`${inter.className} bg-slate-100 flex flex-col min-h-screen w-full`}
      >
        <Navigation />
        <main className="flex flex-auto flex-col bg-green-50">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
