const createPosts = require('./utils/createPosts')
const createSitePages = require('./utils/createSitePages')
const createCategories = require('./utils/createCategories')
const createTags = require('./utils/createTags')

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      wp {
        allSettings {
          readingSettingsPostsPerPage
        }
      }
    }
  `)

  const options = {
    postsPerPage: data.wp.allSettings.readingSettingsPostsPerPage,
  }
  await Promise.all([
    createPosts({ actions, graphql }, options),
    createSitePages({ actions, graphql }, options),
    createCategories({ actions, graphql }, options),
    createTags({ actions, graphql }, options),
  ])
}
