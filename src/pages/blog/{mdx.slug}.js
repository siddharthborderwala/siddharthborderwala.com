import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import RenderMDX from '../../components/mdx';
import { Meta, PostStructuredData } from '../../components/seo';
import StandardLayout from '../../layouts/standard';
import Badge from '../../components/badge';
import ShareCard from '../../components/share-card';

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
      <header className="mt-8 md:mt-10 w-constraint">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-700">
          {title}
        </h1>
        <div className="flex flex-col sm:flex-row items-start md:items-center mt-3 md:mt-4">
          <p className="md:text-xl text-gray-600 mr-0 md:mr-5 mb-2 md:mb-0">
            {date}
          </p>
          <Badge label={category} />
        </div>
        <p className="text-xl md:text-2xl text-gray-700 mt-6">{description}</p>
        <GatsbyImage
          image={image}
          alt={hero_image_alt}
          className="mt-6 rounded-md shadow-lg"
        />
      </header>
      <main className="w-constraint text-gray-700 mt-8">
        <RenderMDX>{body}</RenderMDX>
        <ShareCard
          title={title}
          author="Siddharth Borderwala"
          url={siteUrl + location.pathname}
        />
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
