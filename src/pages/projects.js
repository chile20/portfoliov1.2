import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <div className="max-w-4xl mx-auto sm:py-4 px-4">
        <div className="flex flex-row flex-wrap -mx-4">
          {posts.map(post => (
            <div key={post.node.id} className="block inset-0 w-full h-full rounded-lg bg-no-repeat bg-center bg-cover">
              <div className="w-full sm:w-1/2 h-full p-4">
                <div className="px-8 py-20 relative z-10 w-full h-full rounded-lg p-6 bg-black">
                  <h1 className="tracking-widest px-8 text-4xl font-bold text-white">{post.node.frontmatter.title}</h1>
                  <div className="font-semibold text-gray-500 px-8">
                    <span className="inline-block px-2 py-1 text-sm mr-2">{post.node.frontmatter.date}</span>
                  </div>
                  <Link to={post.node.fields.slug}>read</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;

// Get all markdown data, in descending order by date, and grab the id, excerpt, slug, date, and title
export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;