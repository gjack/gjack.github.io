module.exports = {
  siteMetadata: {
    siteUrl: "https://gabijack.com",
    title: "Gabi Jack",
    description: "Gabi Jack's blog and personal site",
    twitter: 'alluneediscode',
    siteUrl: 'https://gabijack.com'
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
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Gabi Jack`,
        short_name: `Gabi Jack`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: 'src/images/icon.png'
      }
    }
  ],
};
