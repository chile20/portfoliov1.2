import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Typewriter from "typewriter-effect";
import { graphql, StaticQuery } from "gatsby"
import PostCard from "../components/postCard"


import Resume from "../static/chile-resume.pdf";
import IconRightArrow from "../components/icons/rightArrow";


const Section = (props) => <div {...props} className="max-w-4xl mx-auto font-body"/>;

const Wrapper = (props) => (
  <div {...props} className="px-4 sm:px-8 title-font py-8 mt-16 md:mt-24 sm:text-4xl text-2xl md:flex flex-row text-center md:text-left" />
);

const Intro = (props) => (
  <div {...props} className="pr-2 sm:pr-3 " />
);

const Span = (props) => <div {...props} className="" />;

const Button = (props) => (
  <div
    {...props}
    className="px-4 sm:px-8 flex focus:outline-none text-orange-400 my-4 mb-16 md:mb-24 justify-center md:justify-start content-center"
  />
);
const Link = (props) => (
  <a
    {...props}
    className="focus:outline-none pr-2"
  />
);

const Category = (props) => (
  <div {...props} className="absolute float-left -mx-24" />
);

const TextSide = (props) => (
  <h1 {...props} className="font-semibold text-gray-400 tracking-widest text-2xl vertical-rl hidden sm:block pl-10" />
);

const Border = (props) => (
  <div {...props} className="h-24 w-1 border-l-2 border-gray-400 m-3 hidden sm:block" />
);

const TextMiddle = (props) => (
  <h1 {...props} className="font-semibold tracking-widest text-2xl text-center py-10 md:hidden" />
);

const PostFeed = (props) => (
  <div {...props} className="flex flex-row flex-wrap" />
);

//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const BlogIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  let postCounter = 0

  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Work"
      />
      <Section>
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
            DOWNLOAD RESUME
          </Link>
          <IconRightArrow />
        </Button>
      </Section>
      <Section>
        <Category>
          <TextSide>Case Study</TextSide>
          <Border />
        </Category>
        <TextMiddle>
          Case Study
          </TextMiddle>
        <PostFeed>
          {posts.map(({ node }) => {
            postCounter++
            return (
              <PostCard
                key={node.fields.slug}
                count={postCounter}
                node={node}
                postClass={`post`}
              />
            )
          })}
        </PostFeed>
      </Section>
    </Layout>
  );
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
)