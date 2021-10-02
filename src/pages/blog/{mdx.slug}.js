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
        hero_image_credit_link,
        hero_image_credit_text,
        hero_image,
      },
      body,
    },
    site: {
      siteMetadata: { siteUrl },
    },
  },
}) => {
  const image = getImage(hero_image);
  const imgSrc = `${siteUrl}${
    image.images.sources[0].srcSet.split(', ').pop().split(' ')[0]
  }`;
  const siteTitle = `${title} | Blog - Siddharth Borderwala`;

  return (
    <StandardLayout>
      <Meta title={siteTitle} description={description} image={imgSrc} />
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
        <p className="w-constraint">
          Photo Credit:{' '}
          <a
            href={hero_image_credit_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {hero_image_credit_text}
          </a>
        </p>
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
        hero_image_credit_link
        hero_image_credit_text
        hero_image
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
