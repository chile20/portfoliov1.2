import React from "react";
import { Link } from "gatsby";
import "../css/test.css";

const Wrapper = (props) => (
  <div {...props} className="sm:w-1/2 w-full pt-4 sm:pt-0 sm:mt-0 mb-8 px-4 sm:px-8" />
);
const Title = (props) => (
  <div {...props} className="text-center sm:pt-8 pt-4" />
);

const Subtitle = (props) => (
  <div {...props} className="font-light text-center text-gray-500 pt-1 pb-8 sm:pb-0 sm:border-b-0 border-b border-gray-400" />
);

export default props => (
  <Wrapper>
  <Link to={props.node.fields.slug} >
    <article className={`post-card ${props.count % 2 === 0 && `sm:mt-16`}
    ${props.postClass}
    `}
    style={
      props.node.frontmatter.thumbnail && {
        backgroundImage: `url(${
          props.node.frontmatter.thumbnail.childImageSharp.fluid.src
        })`,
      }
    }
    />
    <Title>
    {props.node.frontmatter.title || props.node.fields.slug}
    </Title>
    <Subtitle>
    {props.node.frontmatter.description}
    </Subtitle>
  </Link>
  </Wrapper>
)
// export default props => (
//   <article
//     className={`post-card ${props.count % 3 === 0 && `post-card-large`} ${
//       props.postClass
//     } ${props.node.frontmatter.thumbnail ? `with-image` : `no-image`}`}
//     style={
//       props.node.frontmatter.thumbnail && {
//         backgroundImage: `url(${
//           props.node.frontmatter.thumbnail.childImageSharp.fluid.src
//         })`,
//       }
//     }
//   >
//     <Link to={props.node.fields.slug} className="post-card-link">
//       <div className="post-card-content">
//         <h2 className="post-card-title">
//           {props.node.frontmatter.title || props.node.fields.slug}
//         </h2>
//       </div>
//     </Link>
//   </article>
// )