import { graphql } from 'gatsby'
import Blog from '../components/Posts'

export default Blog

export const pageQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
    allWpPost(limit: $limit, skip: $skip, sort: { order: DESC, fields: date }) {
      nodes {
        ...PostTemplateFragment
      }
    }
  }
  fragment PostTemplateFragment on WpPost {
    id
    uri
    slug
    title
    excerpt
    date(formatString: "MMM DD, yyyy")

    featuredImage {
      node {
        ...GatsbyImageQuery
      }
    }
    categories {
      nodes {
        id
        slug
        name
        uri
      }
    }

    author {
      node {
        name
        slug
        uri
        avatar {
          url
        }
      }
    }
    tags {
      nodes {
        name
        slug
        uri
      }
    }
  }

  fragment GatsbyImageQuery on WpMediaItem {
    altText
    sourceUrl
    localFile {
      childImageSharp {
        gatsbyImageData(width: 680, aspectRatio: 1.333, quality: 80)
      }
    }
  }
`
