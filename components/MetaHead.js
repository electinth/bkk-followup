import React from "react";
import Head from "next/head";
import config from "jsconfig.json";

function MetaHead() {
  let og_image = config.og_main;
  // if (router.query.slide == 1) og_image = config.og_budget;
  // if (router.query.slide == 8) og_image = config.og_responsibility;

  return (
    <Head>
      <title>{config.title}</title>

      <meta name="description" content={config.description}></meta>

      <meta property="og:title" content={config.title} />

      <meta property="og:description" content={config.description} />

      <meta property="og:type" content="website" />

      <meta property="og:image" content={config.web_url + og_image} />

      <meta property="og:url" content={config.web_url} />

      <meta name="twitter:title" content={config.title} />

      <meta name="twitter:description" content={config.description} />

      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:image:src" content={config.web_url + og_image} />

      <meta property="twitter:url" content={config.web_url} />
    </Head>
  );
}

export default MetaHead;
