import Layout from "layouts/layout";
import Intro from "components/Home/Intro";
import Main from "components/Home/Main";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [start_intro, startIntro] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      startIntro(true);
    }, 0);
  }, []);

  return <Layout>{start_intro ? <Main /> : <Intro />}</Layout>;
}
