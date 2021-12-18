require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const siteUrl = process.env.ORIGIN;

module.exports = {
  siteMetadata: {
    siteUrl,
    title: 'Siddharth Borderwala',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-gatsby-cloud',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M122.34315,71.43146l19.799-19.799a44,44,0,1,1,62.22539,62.22539l-28.28427,28.28428a44,44,0,0,1-62.2254,0" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M133.65685,184.56854l-19.799,19.799a44,44,0,1,1-62.22539-62.22539l28.28427-28.28428a44,44,0,0,1,62.2254,0" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>',
              maintainCase: false,
              enableCustomId: true,
              isIconAfterHeader: false,
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: { maxWidth: 1080 },
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-postcss',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              siteUrl
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) =>
              allMdx.nodes.map(node => ({
                url: site.siteMetadata.siteUrl + '/blog/' + node.slug,
                guid: site.siteMetadata.siteUrl + '/blog/' + node.slug,
                title: node.frontmatter.title,
                description: node.frontmatter.description,
                date: node.frontmatter.date,
              })),
            query: `
              {
                allMdx(sort: { fields: frontmatter___date, order: DESC }) {
                  nodes {
                    id
                    slug
                    frontmatter {
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
            `,
            output: '/rss.xml',
            title: 'RSS Feed - Blog | Siddharth Borderwala',
            description: `Siddharth Borderwala's blog.`,
            link: `${siteUrl}/blog`,
            match: '^/blog/',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: './blog',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
  ],
};
