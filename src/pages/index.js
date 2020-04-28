import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Typewriter from "typewriter-effect";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="text-left my-24">
        <h1 className="title-font font-semibold sm:text-4xl text-xl">
          Hi, I am Chi.
        </h1>
        <div className="text-xl sm:text-4xl font-semibold flex ">
          <h1 className="pr-2 sm:pr-3 content-center pt-1 sm:py-2">I am a</h1>
          <div className="font-bold text-orange-400">
            <Typewriter
              options={{
                strings: ["product designer", "front-end developer"],
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
