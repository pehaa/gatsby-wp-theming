module.exports = (options) => {
  const { fonts, ...rest } = options
  return {
    plugins: [
      {
        resolve: '@pehaa/gatsby-theme-wp-parent',
        options: {
          ...rest,
        },
      },
      {
        resolve: '@chakra-ui/gatsby-plugin',
      },
      {
        resolve: 'gatsby-plugin-webfonts',
        options: {
          fonts: fonts || {
            google: [
              {
                family: 'Karma',
                variants: ['400', '400i', '700'],
                fontDisplay: 'swap',
              },
              {
                family: 'Poppins',
                variants: ['400', '900'],
                fontDisplay: 'swap',
              },
            ],
          },
        },
      },
    ],
  }
}
