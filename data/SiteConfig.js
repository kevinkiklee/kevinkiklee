module.exports = {
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  blogPostDir: '', // The name of directory that contains your posts.
  siteTitle: 'I have no idea what I am doing',
  siteTitleAlt: 'I have no idea what I am doing', // Alternative site title for SEO.
  siteLogo: '/logos/logo.png', // Logo used for SEO and manifest.
  siteUrl: 'https://kevinkiklee.com', // Domain of your website without pathPrefix.
  siteDescription: 'Coding blog focused on algorithms & data structures, breaking into the software engineering industry, random ramblings about code, and of course, memes.',
  siteRss: '/rss.xml', // Path to the RSS file.
  siteFBAppID: '1417030101752305', // FB Application ID for using app insights
  googleAnalyticsID: 'UA-93552684-1', // GA tracking ID.
  disqusShortname: 'https-vagr9k', // Disqus shortname.
  postDefaultCategoryID: 'Tech', // Default category for posts.
  userName: 'Kevin K. Lee', // Username to display in the author segment.
  userTwitter: 'kevinkiklee', // Optionally renders 'Follow Me' in the UserInfo segment.
  userLocation: 'New York, NY', // User location to display in the author segment.
  userAvatar: '/logos/logo.png', // User avatar to display in the author segment.
  userDescription:
    'I am a software engineer in NYC with experience in React, Node, GraphQL and Rails.', // User description to display in the author segment.
  userLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/kevinkiklee',
      iconClassName: 'fa fa-github',
    },
    {
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/kevinkiklee',
      iconClassName: 'fa fa-linkedin',
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/kevinkiklee',
      iconClassName: 'fa fa-twitter',
    },
    {
      label: 'Email',
      url: 'mailto:kevin.kik.lee@gmail.com',
      iconClassName: 'fa fa-envelope',
    },
  ],
  copyright: 'Copyright © 2018', // Copyright string for the footer of the website and RSS feed.
  themeColor: '#fff7e6', // Used for setting manifest and progress theme colors.
  backgroundColor: '#fdfaf6', // Used for setting manifest background color.
};
