import { Box, Container, Heading, Text } from '@chakra-ui/layout'
import React from 'react'
import Layout from '../components/Layout'

const Page404 = () => {
  return (
    <Layout>
      <Container d="flex" minH="calc(100vh - 10.5rem)">
        <Box m="auto" textAlign="center">
          <Heading as="h1">404</Heading>
          <Text>This page does not exist.</Text>
        </Box>
      </Container>
    </Layout>
  )
}

export default Page404
