import { graphql } from 'gatsby'
import Tag from '../components/Tag'

export default Tag

export const pageQuery = graphql`
  query ($id: String!, $limit: Int!, $skip: Int!) {
    allWpPost(
      filter: { tags: { nodes: { elemMatch: { id: { eq: $id } } } } }
      limit: $limit
      skip: $skip
      sort: { order: DESC, fields: date }
    ) {
      nodes {
        ...PostTemplateFragment
      }
    }
    wpTag(id: { eq: $id }) {
      uri
      name
      description
    }
  }
`
