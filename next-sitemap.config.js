// next-sitemap.config.js

module.exports = {
    siteUrl: 'https://baobabdevelopmentsolutions.com', // Replace with your site's URL
    generateRobotsTxt: true, // Generate a robots.txt file
    // Optional: Add additional configurations here
    sitemapSize: 7000, // Maximum number of URLs per sitemap file
    changefreq: 'weekly', // Change frequency of URLs in the sitemap
    priority: 0.7, // Default priority for URLs in the sitemap
    exclude: ['/secret-page', '/another-page-to-exclude'], // Exclude specific pages
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'Googlebot', allow: '/' },
      { userAgent: '*', disallow: '/secret-page' }
    ],
  },
};
  