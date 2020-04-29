import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

const PostTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <section>
      <div className="w-full sm:w-1/2 h-full p-4 bg-gray-500">
            <div className="px-8 py-20 relative z-10 w-full h-full rounded-lg p-6 bg-black">
                <h1  className="tracking-widest px-8 text-4xl font-bold text-white">{frontmatter.title}</h1>
                <div className="font-semibold text-gray-500 px-8">
                <span className="inline-block px-2 py-1 text-sm mr-2">{frontmatter.date}</span>
                <div dangerouslySetInnerHTML={{ __html: html }} />
                </div>
            </div>
        </div>
      </section>
    </Layout>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`;