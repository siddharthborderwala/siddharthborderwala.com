import React from 'react';
import { graphql, Link } from 'gatsby';

import StandardLayout from '../../layouts/standard';

const BlogPage = ({ data }) => {
  return (
    <StandardLayout>
      <header></header>
      <main>
        {data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))}
      </main>
    </StandardLayout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMM DD, YY")
          title
        }
        id
        slug
      }
    }
  }
`;

export default BlogPage;
