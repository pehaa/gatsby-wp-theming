module.exports = (options) => {
  return {
    plugins: [
      'gatsby-plugin-sharp', // must have for gatsby 🏞
      'gatsby-transformer-sharp', // must have for gatsby 🏞
      'gatsby-plugin-image',
      {
        resolve: 'gatsby-source-wordpress',
        options: {
          url: `${options.wordPressUrl}/graphql`,
          ...options.gatsbySourceWordPressOptions,
        },
      },
    ],
  }
}
