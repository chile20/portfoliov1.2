import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Typewriter from 'typewriter-effect';


function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="text-left">

        <h1 className="title-font font-bold sm:text-6xl text-xl">
          Hi, I am Chi.
        </h1>

        <div className="text-xl sm:text-6xl font-semibold flex "> 
      <h1 className="pr-2 sm:pr-4">I am a</h1>
      <div className="text-orange-400">
      <Typewriter
  options={{
    strings: ['product designer', 'front-end developer'],
    autoStart: true,
    loop: true,
  }}
/>
</div>
</div>
      </section>
    </Layout>
  );
}

export default IndexPage;
