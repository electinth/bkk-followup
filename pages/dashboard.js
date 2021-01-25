import styles from "../styles/Dashboard.module.css";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="container mx-auto py-10">
      <h1>Dashboard page</h1>

      <Link href="/">
        <a className="text-blue-default font-bold text-lg block mt-3">
          Back to Home
        </a>
      </Link>
    </div>
  );
}
