import React from 'react'
import { Link } from 'gatsby'
import { Container, Flex, Button } from '@chakra-ui/react'

export const Pagination = ({ ctx }) => {
  const { humanPageNumber, nextPagePath, previousPagePath } = ctx
  // return empty string if there is only one page
  if (humanPageNumber === 1 && !nextPagePath) {
    return ''
  }
  return (
    <Container as="nav" d="flex" align="center" mb={12}>
      {previousPagePath && (
        <Button variant="outline" as={Link} to={previousPagePath} mr="auto">
          Newer Posts
        </Button>
      )}
      {nextPagePath && (
        <Button variant="outline" as={Link} to={nextPagePath} ml="auto">
          Older posts
        </Button>
      )}
    </Container>
  )
}

export default Pagination
