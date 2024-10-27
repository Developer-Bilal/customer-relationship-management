import { redirect } from "next/navigation";

export default function Home() {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    redirect("/signin");
  }
  return (
    <div>
      <h1>This is heading!</h1>
    </div>
  );
}
