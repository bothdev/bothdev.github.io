module.exports = {
  siteTitle: 'Vorreakboth Chhoeurn',
  siteDescription:
    'Vorreakboth Chhoeurn is an incoming Software Developer, based in Cambodia, who loves learning new things and helping tech beginners.',
  siteKeywords:
    'Vorreakboth Chhoeurn, Vorreakboth, Chhoeurn, vorreakboth, software engineer, android app developer, python, java, cambodia, phnom penh',
  siteUrl: 'https://bothdev.github.io/',
  siteLanguage: 'en_US',
  // googleAnalyticsID: 'UA-45666519-2',
  // googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Vorreakboth Chhoeurn',
  location: 'Phnom Penh, Cambodia',
  email: 'vorreakboth@gmail.com',
  github: 'https://github.com/bothdev',
  twitterHandle: '@',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/bothdev',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/vorreakboth/',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/vorreakboth',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/vorreakboth',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/vorreakboth',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    // {
    //   name: 'Experience',
    //   url: '/#jobs',
    // },
    // {
    //   name: 'Projects',
    //   url: '/#projects',
    // },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
