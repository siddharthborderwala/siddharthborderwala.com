import React from 'react';
import { graphql, Link } from 'gatsby';

import StandardLayout from '../../layouts/standard';
import FeaturedArticle from '../../components/featured-article';

const BlogPage = ({
  data: {
    allMdx: { posts },
  },
}) => {
  const featuredArticle = posts.splice(0, 1)[0];

  return (
    <StandardLayout>
      <main className="w-constraint">
        <h1 className="text-4xl font-bold mt-8">My Blog</h1>
        <FeaturedArticle
          slug={featuredArticle.slug}
          info={featuredArticle.info}
        />
        {posts.map(({ info, id, slug }) => (
          <article key={id}>
            <h2>
              <Link to={`/blog/${slug}`}>{info.title}</Link>
            </h2>
            <p>Posted: {info.date}</p>
          </article>
        ))}
      </main>
    </StandardLayout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      posts: nodes {
        id
        slug
        info: frontmatter {
          date(formatString: "MMM DD, YY")
          title
          description
          category
          hero_image {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [WEBP, JPG])
            }
          }
          hero_image_alt
        }
      }
    }
  }
`;

export default BlogPage;
