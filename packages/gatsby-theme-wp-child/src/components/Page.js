import React from 'react'
import parse from 'html-react-parser'
import { Heading, Flex, Button, Box, Container } from '@chakra-ui/react'
import { contentStyles } from '../styles/layout'
const Page = ({ page }) => {
  return (
    <main>
      <Box as="article" sx={contentStyles}>
        <Heading as="h1" textAlign="center" py={12}>
          <span itemProp="headline">{parse(page.title)}</span>
        </Heading>
        <Box className="entry-content">{parse(page.content)}</Box>
      </Box>
    </main>
  )
}

export default Page
