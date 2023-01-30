import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomePage/HomepageFeatures";
import IntroPage from "../components/HomePage/IntroPage";
import OpenSource from "../components/HomePage/OpenSource";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <main>
        <IntroPage />
        <HomepageFeatures />
        <OpenSource />
      </main>
    </Layout>
  );
}
