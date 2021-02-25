import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div
      id="header"
      className="sticky z-20 shadow-xl bg-white-default"
      style={{ height: "60px" }}
    >
      <Link href="/">
        <a className=" text-pink-default">Home</a>
      </Link>

      <Link href="/intro-dashboard">
        <a className=" text-blueGray-default">dashboard</a>
      </Link>
    </div>
  );
}
