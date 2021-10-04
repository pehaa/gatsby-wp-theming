import { graphql } from "gatsby"
import SinglePost from "../components/Post"

export default SinglePost

export const pageQuery = graphql`
  query ($id: String!) {
    wpPost(id: { eq: $id }) {
      content
      ...PostTemplateFragment
    }
  }
`
