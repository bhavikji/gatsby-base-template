module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Top Mobile Application Development Company in India | USA | WebMobTechnologies', // Navigation and Site Title
  titleAlt: 'WebMob Technologies', // Title for JSONLD
  description:
    'If you are hunting for the top mobile app development company then visit WebMobTechnologies |  Mobile and Web app development company',
  headline:
    'We dive into the technology trends Contact us for Mobile and Website Application Development Services | IoT, Wearable Devices, On-Demand Apps', // Headline for schema.org JSONLD
  url: 'https://webmobtech.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/logos/logo-1024.png', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'WMT', // shortname for manifest. MUST be shorter than 12 characters
  themeColor: '#00bcd4',
  backgroundColor: '#fff',

  twitter: '@webmobtech', // Twitter Username
  facebook: 'webmobtech', // Facebook Site Name
  googleAnalyticsID: 'UA-22140317-1',

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature

  menu: [
    {
      label: 'Work',
      path: '/portfolio',
    },
    {
      label: 'Services',
      path: '/services',
    },
    {
      label: 'Tools & Tech',
      path: '/tools-and-technologies',
    },
    {
      label: 'About Us',
      path: '/about-us',
    },
    {
      label: 'Blog',
      path: '/blog',
    },
    {
      label: 'Career',
      path: '/career',
    },
    {
      label: 'Contact',
      path: '/contact-us',
    },
  ],
  author: {
    name: 'WebMob Technologies',
    photo: '/photo.jpg',
  },
  contacts: {
    address: '202, Kalasagar Shopping Hub Ghatlodiya, Ahmedabad, Gujarat, India 380061',
    phone_no: '+1-408-520-9597',
    mail_address: 'sales@webmobtech.com',
  },
};
