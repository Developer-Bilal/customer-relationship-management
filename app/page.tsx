import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-center text-xl w-full mt-10">
        Welcome to the customer relationship management system
      </div>
      <div className="min-h-screen flex items-center justify-center gap-4">
        <Link href="/signin">
          <button className="px-4 py-2 bg-red-300 rounded">Signin</button>
        </Link>
        <Link href="/dashboard">
          <button className="px-4 py-2 bg-red-300 rounded">Dashboard</button>
        </Link>
      </div>
    </div>
  );
}
