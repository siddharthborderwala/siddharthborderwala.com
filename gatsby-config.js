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
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap/sitemap-index.xml`,
        resolveEnv: () => process.env.NODE_ENV,
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['*'] }],
          },
          production: {
            policy: [
              { userAgent: '*', disallow: '/404' },
              { userAgent: '*', disallow: '/404.html' },
              { userAgent: '*', allow: '*' },
            ],
          },
        },
      },
    },
  ],
};
