import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import RenderMDX from '../../components/mdx';
import { Meta, PostStructuredData } from '../../components/seo';
import StandardLayout from '../../layouts/standard';
import Badge from '../../components/badge';
import ShareCard from '../../components/share-card';
import ExternalLink from '../../components/external-link';

const BlogPost = ({
  data: {
    mdx: {
      frontmatter: {
        title,
        description,
        category,
        date,
        createdAt,
        hero_image,
        hero_image_alt,
        hero_image_credit_url,
        hero_image_credit_name,
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
  const siteTitle = `${title} — Blog | Siddharth Borderwala`;

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
        authorName="Siddharth Borderwala"
      />
      <header className="mt-8 md:mt-10 w-constraint">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-700">
          {title}
        </h1>
        <div className="flex flex-col sm:flex-row items-start md:items-center mt-3 md:mt-4">
          <p className="md:text-xl text-gray-600 mr-0 sm:mr-4 md:mr-6 mb-2 md:mb-0">
            {date}
          </p>
          <Badge label={category} />
        </div>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mt-6">
          {description}
        </p>
        <GatsbyImage
          image={image}
          alt={hero_image_alt}
          className="mt-6 rounded-md shadow-lg max-h-[50vh]"
          imgClassName="rounded-md"
        />
        <p className="mt-4 text-gray-500">
          Photo by{' '}
          <ExternalLink href={hero_image_credit_url}>
            {hero_image_credit_name}
          </ExternalLink>
        </p>
      </header>
      <main className="w-constraint text-gray-700 mt-8">
        <article>
          <RenderMDX>{body}</RenderMDX>
        </article>
        <div className="flex flex-col-reverse justify-start md:flex-row md:justify-between border-t pt-12 mt-16">
          <div className="mt-12 md:mt-0 md:pr-6">
            <h3 className="text-3xl font-bold">Read More</h3>
            <p className="text-xl mt-8">
              If you found this article helpful, you may like to read{' '}
              <Link className="text-red-400 underline" to="/blog">
                more
              </Link>
            </p>
          </div>
          <ShareCard
            title={title}
            author="Siddharth Borderwala"
            url={siteUrl + location.pathname}
          />
        </div>
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
        hero_image {
          childImageSharp {
            gatsbyImageData(placeholder: DOMINANT_COLOR, formats: [WEBP, PNG])
          }
        }
        hero_image_alt
        hero_image_credit_url
        hero_image_credit_name
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
