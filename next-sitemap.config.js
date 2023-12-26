/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://siddharthborderwala.com',
  autoLastmod: true,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '*',
      },
    ],
  },
  generateIndexSitemap: false,
  trailingSlash: false,
};
