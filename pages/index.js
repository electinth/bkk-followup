import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      <h1>Home page</h1>

      <Link href="/dashboard">
        <a className="text-blue-default font-bold text-lg block mt-3">
          Go to Dashboard
        </a>
      </Link>
    </div>
  );
}
