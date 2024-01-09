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
  additionalPaths: config => {
    return [
      {
        loc: 'https://siddharthborderwala.com/resume.pdf',
        lastmod: new Date().toISOString(),
      },
    ];
  },
  generateIndexSitemap: false,
  trailingSlash: false,
};
