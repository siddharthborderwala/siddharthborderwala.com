import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import StandardLayout from '../../layouts/standard';

const BlogPage = ({
  data: {
    allMdx: { posts },
  },
}) => {
  const featuredPost = posts.splice(0, 1)[0];
  const featuredPostImage = getImage(featuredPost.info.hero_image);

  return (
    <StandardLayout>
      <main className="w-constraint">
        <h1 className="text-2xl font-bold">
          My Blog{' '}
          <span role="img" title="Writing">
            ✍️
          </span>
        </h1>
        <article>
          <GatsbyImage
            image={featuredPostImage}
            alt={featuredPost.info.hero_image_alt}
            className="w-constraint"
          />
          <h2>
            <Link to={`/blog/${featuredPost.slug}`}>
              {featuredPost.info.title}
            </Link>
          </h2>
          <p>Posted: {featuredPost.info.date}</p>
          <p>{featuredPost.info.description}</p>
        </article>
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
