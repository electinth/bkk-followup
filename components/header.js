import React from "react";
import Link from "next/link";

export default function header() {
  return (
    <div id="Header" className=" bg-white-default" style={{ height: "60px" }}>
      <Link href="/">
        <a className=" text-pink-default">Home</a>
      </Link>
      <Link href="/dashboard">
        <a className=" text-blueGray-default">dashboard</a>
      </Link>
    </div>
  );
}
