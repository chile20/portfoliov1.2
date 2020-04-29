import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Typewriter from "typewriter-effect";
import { graphql } from "gatsby";



import Resume from "../static/chile-resume.pdf";
import { ArrowRight } from "react-feather";

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
                  strings: [
                    "Product Designer",
                    "UI - UX Designer",
                    "Front-end Developer",
                  ],
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
            <ArrowRight />
          </button>
        </div>
      </section>
    </Layout>
  );
}

const indexQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date
            author
            path
          }
          excerpt
        }
      }
    }
  }
`;

export default IndexPage;
