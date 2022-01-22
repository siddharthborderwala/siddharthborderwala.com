import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Check, ClipboardText } from 'phosphor-react';
import copy from 'copy-to-clipboard';

import StandardLayout from '../../layouts/standard';
import FeaturedArticle from '../../components/featured-article';
import Meta from '../../components/seo/meta';
import useSiteMetadata from '../../hooks/use-site-metadata';

const clipIcon = <ClipboardText size="20" weight="bold" />;
const checkIcon = <Check size="20" weight="bold" />;

const CopyButton = ({ url }) => {
  const [icon, setIcon] = useState(clipIcon);

  const handleCopy = e => {
    copy(url);
    e.preventDefault();
    e.stopPropagation();
    setIcon(checkIcon);
    setTimeout(() => {
      setIcon(clipIcon);
    }, 1500);
  };

  return (
    <button
      className="inline-block p-2 text-red-400 cursor-default"
      title="Copy link to clipboard"
      onClick={handleCopy}
    >
      {icon}
    </button>
  );
};

const BlogPage = ({
  data: {
    allMdx: { posts },
  },
  location,
}) => {
  const { siteUrl } = useSiteMetadata();
  const featuredArticle = posts[0];

  console.log(posts);

  return (
    <StandardLayout>
      <Meta
        title="Blog | Siddharth Borderwala"
        description="View all the blog posts by Siddharth Borderwala - a computer science undergrad and a full-stack web engineer specializing in the javascript ecosystem."
        path={location.pathname}
      />
      <div style={{ backgroundImage: 'url(/dot-grid.png)' }}>
        <main className="w-constraint pt-8">
          <h1 className="text-4xl font-bold">My Blog</h1>
          <FeaturedArticle
            id={featuredArticle.id}
            slug={featuredArticle.slug}
            info={featuredArticle.info}
          />
          <div className="flex flex-wrap mt-8 md:space-x-6">
            {posts.slice(1).map(({ info, id, slug }) => (
              <Link
                key={id}
                to={`/blog/${slug}`}
                className="w-full sm:w-1/2 md:w-1/3 mt-6"
              >
                <article>
                  <GatsbyImage
                    image={getImage(info.hero_image)}
                    alt={info.hero_image_alt}
                    className="rounded shadow-md w-full"
                    imgClassName="rounded"
                  />
                  <h2 className="font-bold text-xl sm:text-2xl mt-4 text-gray-700">
                    {info.title}
                  </h2>
                  <div className="flex justify-between items-center">
                    <p className="mt-2 text-lg text-gray-500">{info.date}</p>
                    <CopyButton url={`${siteUrl}/blog/${slug}`} />
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </main>
      </div>
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
              gatsbyImageData(placeholder: DOMINANT_COLOR, formats: [WEBP, JPG])
            }
          }
          hero_image_alt
        }
      }
    }
  }
`;

export default BlogPage;
