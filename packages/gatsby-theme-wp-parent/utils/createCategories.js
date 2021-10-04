const { paginate } = require('gatsby-awesome-pagination')
const template = require.resolve('../src/templates/category-query.js')
const GET_CATEGORIES = `
  query GET_CATEGORIES {
    allWpCategory {
      nodes {
        id
        uri
        posts {
          nodes {
            id
          }
        }
      }
    }
  }
  `

module.exports = async ({ actions, graphql }, options) => {
  const { createPage } = actions
  const categoriesQuery = await graphql(GET_CATEGORIES)
  const categories = categoriesQuery.data.allWpCategory.nodes

  return Promise.all(
    categories.map((category) =>
      paginate({
        createPage,
        pathPrefix: ({ pageNumber }) =>
          pageNumber === 0 ? category.uri : `${category.uri}page`,
        component: template,
        items: category.posts.nodes,
        itemsPerPage: options.postsPerPage,
        context: {
          id: category.id,
        },
      })
    )
  )
}
