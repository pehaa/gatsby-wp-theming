import React from 'react'
import parse from 'html-react-parser'
import { Link } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import { Heading, Flex, Button, Box, Container } from '@chakra-ui/react'
import '@wordpress/block-library/build-style/style.css'
import '@wordpress/block-library/build-style/theme.css'
import { contentStyles } from '../../styles/layout'
import Taxonomies from './Taxonomies'
import Categories from './Categories'

const PostEntryFull = ({ post, ctx }) => {
  const image = getImage(post.featuredImage?.node.localFile)
  return (
    <Box
      as="article"
      className="post-list-item"
      itemScope
      itemType="http://schema.org/Article"
      sx={contentStyles}
    >
      <Container maxWidth="wideContent" as="header" textAlign="center" mb={8}>
        {image && (
          <GatsbyImage image={image} alt={post.featuredImage?.alt || ''} />
        )}
        <Categories mt={6} mb={4} categories={post.categories.nodes} />
        <Heading as="h1">
          <span itemProp="headline">{parse(post.title)}</span>
        </Heading>
        <small>{post.date}</small>
      </Container>
      <Box mb={16} itemProp="articleBody" className="entry-content">
        {parse(post.content)}
      </Box>
      <Container>
        {!!post.tags.nodes.length && (
          <Taxonomies items={post.tags.nodes} title="Tags:" />
        )}
        <Flex as="nav" mt={8} className="blog-post-nav" mb={12}>
          {ctx.next && (
            <Button
              variant="outline"
              as={Link}
              to={ctx.next}
              mr="auto"
              rel="next"
            >
              Older Post
            </Button>
          )}
          {ctx.prev && (
            <Button
              variant="outline"
              as={Link}
              to={ctx.prev}
              ml="auto"
              rel="prev"
            >
              Newer Post
            </Button>
          )}
        </Flex>
      </Container>
    </Box>
  )
}

export default PostEntryFull
