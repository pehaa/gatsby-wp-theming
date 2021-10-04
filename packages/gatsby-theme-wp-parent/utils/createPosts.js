const { paginate } = require('gatsby-awesome-pagination')
const GET_POSTS = `
  query GET_POSTS {
    allWpPost(sort: {order: DESC, fields: date}) {
      edges {
        previous {
          uri
        }
        node {
          uri
          id
        }
        next {
          uri
        }
      }
    }
  }
  `

module.exports = async ({ actions, graphql }, options) => {
  const { postsPerPage } = options
  const { createPage } = actions
  const postsQuery = await graphql(GET_POSTS)
  const posts = postsQuery.data.allWpPost.edges

  await Promise.all(
    posts.map((post) => {
      createPage({
        path: post.node.uri,
        component: require.resolve('../src/templates/post-query.js'),
        context: {
          id: post.node.id,
          prev: post.previous ? post.previous.uri : null,
          next: post.next ? post.next.uri : null,
        },
      })
    })
  )

  paginate({
    createPage,
    pathPrefix: ({ pageNumber }) => {
      return pageNumber === 0 ? '/' : '/page'
    },
    component: require.resolve('../src/templates/posts-query.js'),
    items: posts,
    itemsPerPage: postsPerPage,
  })
}
