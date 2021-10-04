import React from 'react'
import { Link } from 'gatsby'
import { Box, Flex, Button, Heading } from '@chakra-ui/react'

const Taxonomies = ({ items, title }) => {
  return (
    <Flex
      as="section"
      className="entry-taxonomy entry-tags"
      alignItems="center"
      justifyContent="space-between"
      borderBottomWidth="1px"
    >
      <Heading my="4" fontSize="lg">
        {title}
      </Heading>
      <Flex
        wrap="wrap"
        textTransform="uppercase"
        sx={{
          gap: '.5rem',
          '[aria-current]': {
            fontWeight: 'black',
          },
        }}
      >
        {items.map((tag) => (
          <Box
            fontSize="sm"
            fontFamily="heading"
            as={Link}
            key={tag.slug}
            to={tag.uri}
          >
            {tag.name}
          </Box>
        ))}
      </Flex>
    </Flex>
  )
}

export default Taxonomies
