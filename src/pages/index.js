import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Typewriter from "typewriter-effect";

import Resume from "../static/chile-resume.pdf";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="max-w-4xl">
        <div className="text-left w-full self-center">
          <h1 className="title-font font-semibold sm:text-4xl text-xl">
            Hi, I am Chi
          </h1>
          <div className="text-xl sm:text-4xl font-semibold flex ">
            <h1 className="pr-2 sm:pr-3 content-center pt-2 sm:py-3">I am a</h1>
            <div className="font-bold text-orange-400 pt-1">
              <Typewriter
                options={{
                  strings: ["product designer", "front-end developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
          <button className="flex focus:outline-none md:hover:text-orange-400 my-4 py-2 rounded">
            <a
              className="focus:outline-none font-semibold pr-2"
              href={Resume}
              download
            >
              DOWNLOAD CV
            </a>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLineCap="round"
              strokeLineJoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
