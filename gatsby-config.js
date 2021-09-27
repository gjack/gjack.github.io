module.exports = {
  siteMetadata: {
    siteUrl: "https://gabijack.com",
    title: "Gabi Jack",
    description: "Gabi Jack's blog and personal site",
    twitter: 'alluneediscode'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/posts`,
        name: 'posts'
      }
    },
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-plugin-theme-ui',
      options: {
        preset: '@theme-ui/preset-funk',
        prismPreset: 'prism-okaidia'
      }
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp'
  ],
};
