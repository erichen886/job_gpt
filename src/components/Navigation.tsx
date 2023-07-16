import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center text-lg border-b-2 border-black h-24">
      <div className="border-2 border-black ml-2">
        <Link href="/interview_questions">Interview Q&A</Link>
        <Link href="/answers" className="ml-2">
          Jobs
        </Link>
        <Link href="/answers" className="ml-2">
          Settings
        </Link>
      </div>
      <div className="border-2 border-black">
        <h2 className="text-lg">JOBGPT</h2>
      </div>
      <div className="border-2 border-black mr-2">
        Notifications and dark light mode
      </div>
    </nav>
  );
};

export default Navigation;
