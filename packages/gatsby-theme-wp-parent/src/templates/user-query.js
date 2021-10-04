import { graphql } from 'gatsby'
import User from '../components/User'
export default User

export const pageQuery = graphql`
  query($slug: String!, $limit: Int!, $skip: Int!) {
    allWpPost(
      filter: { author: { node: { slug: { eq: $slug } } } }
      limit: $limit
      skip: $skip
      sort: { order: DESC, fields: date }
    ) {
      nodes {
        ...PostTemplateFragment
      }
    }
    wpUser(slug: { eq: $slug }) {
      nicename
      nickname
      name
      slug
      id
      uri
      avatar {
        url
      }
    }
  }
`
