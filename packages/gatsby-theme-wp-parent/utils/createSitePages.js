module.exports = async ({ actions, graphql }, options) => {
  const GET_PAGES = `
  query GET_PAGES {
    allWpPage(sort: { order: DESC, fields: date }) {
      nodes {
        id
        uri
      }
    }
  }
  `
  const { createPage } = actions
  const pagesQuery = await graphql(GET_PAGES)
  const pages = pagesQuery.data.allWpPage.nodes

  return Promise.all(
    pages.map(({ uri, id }) => {
      createPage({
        path: uri,
        component: require.resolve('../src/templates/page-query.js'),
        context: {
          id,
          uri,
        },
      })
    })
  )
}
