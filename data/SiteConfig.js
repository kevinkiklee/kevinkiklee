module.exports = {
  blogPostDir: 'posts', // The name of directory that contains your posts.
  siteTitle: 'kevinkiklee', // Site title.
  siteTitleAlt: 'kevinkiklee', // Alternative site title for SEO.
  siteLogo: '/logos/logo-1024.png', // Logo used for SEO and manifest.
  siteUrl: 'https://kevinkiklee.com', // Domain of your website without pathPrefix.
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: 'i have no idea what i am doing', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteFBAppID: '1825356251115265', // FB Application ID for using app insights
  googleAnalyticsID: 'UA-47311644-5', // GA tracking ID.
  disqusShortname: 'https-vagr9k-github-io-gatsby-advanced-starter', // Disqus shortname.
  postDefaultCategoryID: 'Tech', // Default category for posts.
  userName: 'Kevin K. Lee', // Username to display in the author segment.
  userTwitter: 'kevinkiklee', // Optionally renders 'Follow Me' in the UserInfo segment.
  userLocation: 'New York, NY', // User location to display in the author segment.
  userAvatar: 'https://api.adorable.io/avatars/150/test.png', // User avatar to display in the author segment.
  userDescription:
    'i have no idea what i am doing.', // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
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
  copyright: 'Copyright © 2017', // Copyright string for the footer of the website and RSS feed.
  themeColor: '#c62828', // Used for setting manifest and progress theme colors.
  backgroundColor: '#e0e0e0', // Used for setting manifest background color.
};
