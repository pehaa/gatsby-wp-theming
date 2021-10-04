const { paginate } = require('gatsby-awesome-pagination')
const normalize = require('normalize-path')
const template = require.resolve('../src/templates/tag-query.js')
const GET_TAGS = `
  query GET_TAGS {
    allWpTag {
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
  const tagsQuery = await graphql(GET_TAGS)
  const tags = tagsQuery.data.allWpTag.nodes

  return Promise.all(
    tags.map((tag) =>
      paginate({
        createPage,
        pathPrefix: ({ pageNumber }) =>
          pageNumber === 0 ? tag.uri : `${tag.uri}page`,
        component: template,
        items: tag.posts.nodes,
        itemsPerPage: options.postsPerPage,
        context: {
          id: tag.id,
        },
      })
    )
  )
}
