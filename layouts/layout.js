import React from "react";
import Header from "components/Header";
import Intro from "components/Intro";
import { useRouter } from "next/router";

export default function Layout(props) {
  const router = useRouter();

  return (
    <div>
      <Header />

      {router.pathname === "/" ? <Intro /> : null}

      <div
        id="main"
        className="fixed inset-0 overflow-hidden"
        style={{ top: "60px" }}
      >
        {props.children}
      </div>
    </div>
  );
}
