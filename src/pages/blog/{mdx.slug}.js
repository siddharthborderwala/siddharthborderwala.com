import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import RenderMDX from '../../components/mdx';
import { Meta, PostStructuredData } from '../../components/seo';
import StandardLayout from '../../layouts/standard';

const BlogPost = ({
  data: {
    mdx: {
      frontmatter: {
        title,
        description,
        category,
        date,
        createdAt,
        hero_image_alt,
        hero_image,
        social_preview,
      },
      body,
    },
    site: {
      siteMetadata: { siteUrl },
    },
  },
  location,
}) => {
  const image = getImage(hero_image);
  const social = getImage(social_preview);
  const imgSrc = `${siteUrl}${social.images.fallback.src}`;
  const siteTitle = `${title} | Blog - Siddharth Borderwala`;

  return (
    <StandardLayout>
      <Meta
        title={siteTitle}
        description={description}
        image={imgSrc}
        path={location.pathname}
      />
      <PostStructuredData
        createdAt={createdAt}
        title={siteTitle}
        image={imgSrc}
      />
      <header>
        <div className="w-constraint">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p>{date}</p>
          <p>{category}</p>
        </div>
        <GatsbyImage image={image} alt={hero_image_alt} />
      </header>
      <main className="w-constraint">
        <RenderMDX>{body}</RenderMDX>
      </main>
    </StandardLayout>
  );
};

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        description
        category
        date(formatString: "MMMM DD, YYYY")
        createdAt: date(formatString: "YYYY-MM-DDTHH:mm:ssZ")
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [WEBP, JPG])
          }
        }
        social_preview {
          childImageSharp {
            gatsbyImageData(formats: PNG)
          }
        }
      }
      body
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;

export default BlogPost;
