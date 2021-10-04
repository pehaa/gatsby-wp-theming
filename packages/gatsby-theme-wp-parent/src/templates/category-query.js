import { graphql } from 'gatsby'
import Category from '../components/Category'

export default Category

export const pageQuery = graphql`
  query ($id: String!, $limit: Int!, $skip: Int!) {
    allWpPost(
      filter: { categories: { nodes: { elemMatch: { id: { eq: $id } } } } }
      limit: $limit
      skip: $skip
      sort: { order: DESC, fields: date }
    ) {
      nodes {
        ...PostTemplateFragment
      }
    }
    wpCategory(id: { eq: $id }) {
      uri
      name
      description
    }
  }
`
