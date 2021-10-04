require('dotenv').config()
module.exports = {
  plugins: [
    {
      resolve: `@pehaa/gatsby-theme-wp-child`,
      options: {
        wordPressUrl: process.env.GATSBY_WP_URL,
        gatsbySourceWordPressOptions: {},
        //fonts
      },
    },
  ],
}
