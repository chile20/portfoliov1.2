import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Typewriter from "typewriter-effect";
import { graphql } from "gatsby";


import Resume from "../static/chile-resume.pdf";
import IconRightArrow from "../components/icons/rightArrow";

const Section = (props) => <div {...props} className="max-w-4xl p-4 mx-auto font-body" />;

const Container = (props) => (
  <div {...props} className="w-full py-16 md:py-24 font-normal" />
);

const Wrapper = (props) => (
  <div {...props} className="title-font py-8 sm:text-4xl text-2xl md:flex flex-row text-center md:text-left" />
);

const Intro = (props) => (
  <div {...props} className="pr-2 sm:pr-3 " />
);

const Span = (props) => <div {...props} className="" />;

const Button = (props) => (
  <div
    {...props}
    className="flex focus:outline-none text-orange-400 my-4 py-2 justify-center md:justify-start content-center"
  />
);
const Link = (props) => (
  <a
    {...props}
    className="focus:outline-none pr-2"
  />
);

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <Section>
        <Container>
          <Wrapper>
            <Intro>Chi Le is an aspiring</Intro>
            <Span>
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
            </Span>
          </Wrapper>
          <Button>
            <Link href={Resume} download>
              DOWNLOAD CV
          </Link>
            <IconRightArrow />
          </Button>
        </Container>
      </Section>
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
