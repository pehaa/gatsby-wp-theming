import { Link } from 'gatsby'
import React from 'react'
import parse from 'html-react-parser'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import { Heading, Button, Box, VisuallyHidden, Text } from '@chakra-ui/react'
import Taxonomies from './Taxonomies'
import Categories from './Categories'

const PostEntry = ({ post, isFirst }) => {
  const image = getImage(post.featuredImage?.node.localFile)
  return (
    <Box
      as="article"
      className="post-list-item"
      itemScope
      itemType="http://schema.org/Article"
      mb={36}
    >
      <Box as="header" textAlign="center" mb="10">
        {image && (
          <GatsbyImage
            image={image}
            alt={post.featuredImage?.alt || ''}
            width={300}
          />
        )}
        <Categories mt={6} mb={4} categories={post.categories.nodes} />
        <Heading as="h2" mt="6" fontWeight="black">
          <Link to={post.uri} itemProp="url">
            <span itemProp="headline">{parse(post.title)}</span>
          </Link>
        </Heading>
        <Text as="small" color="gray.500" fontWeight="bold">
          {post.date}
        </Text>
      </Box>
      <Box
        mb={8}
        itemProp="description"
        sx={{
          '.more-link': { display: 'none' },
        }}
      >
        {parse(post.excerpt)}
        <Box
          textAlign="center"
          borderBottomColor="brand.500"
          borderBottomWidth="1px"
        >
          <Button
            as={Link}
            to={post.uri}
            itemProp="url"
            transform="translateY(50%)"
          >
            Continue reading{' '}
            <VisuallyHidden>{parse(post.title)}</VisuallyHidden>
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default PostEntry
