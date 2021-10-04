import React from 'react'
import { Link } from 'gatsby'
import { Box, Flex, Button, Heading, VisuallyHidden } from '@chakra-ui/react'

const Categories = ({ categories, ...props }) => {
  return (
    <Flex
      as="section"
      className="entry-taxonomy entry-tags"
      alignItems="center"
      justifyContent="center"
      {...props}
    >
      <VisuallyHidden my="4" fontSize="lg">
        {categories.length > 1 ? 'Categories:' : 'Category:'}
      </VisuallyHidden>
      <Flex
        wrap="wrap"
        sx={{
          gap: '.5rem',
          '[aria-current]': {
            fontWeight: 'black',
          },
        }}
      >
        {categories.map((category) => (
          <Button
            size="xs"
            as={Link}
            key={category.slug}
            to={category.uri}
            textTransform="uppercase"
            letterSpacing="widest"
          >
            {category.name}
          </Button>
        ))}
      </Flex>
    </Flex>
  )
}

export default Categories
