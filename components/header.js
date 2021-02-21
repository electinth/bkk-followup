import React from "react";
import Link from "next/link";

export default function header() {
  return (
    <div
      id="header"
      className="sticky z-10 bg-white-default shadow-xl"
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
