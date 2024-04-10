"use client";
import Link from "next/link";
const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-slate-50 text-gray-700">
      <h1 className="text-8xl font-bold">ERROR</h1>
      {/* <p className="text-4xl font-medium"></p> */}
      <p className="text-4xl font-medium">FUCKIN ERROR</p>
      <Link href="/" className="mt-4 text-xl text-blue-600 hover:underline">
        Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
