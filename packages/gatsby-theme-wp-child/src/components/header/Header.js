import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Link as ChakraLink, Container, Flex, Box } from '@chakra-ui/layout'

import { useMediaQuery } from '@chakra-ui/media-query'
import Menu from './Menu'
import MobileNavigation from './MobileNavigation'
const Header = () => {
  const [isMobile] = useMediaQuery('(max-width: 720px)')
  const data = useStaticQuery(graphql`
    query {
      wp {
        generalSettings {
          title
        }
      }
    }
  `)
  return (
    <Box
      className="site-header"
      as="header"
      boxShadow="lg"
      bg="white"
      p={4}
      position="sticky"
      top={0}
      mb={8}
      zIndex="100"
    >
      <Flex as={Container} maxWidth="wideContent" alignItems="center">
        <ChakraLink
          as={Link}
          fontFamily="heading"
          fontWeight="bold"
          to="/"
          mr="auto"
        >
          {data.wp.generalSettings.title}
        </ChakraLink>
        {isMobile ? (
          <MobileNavigation>
            <Menu sx={{ flexDirection: 'column' }} />
          </MobileNavigation>
        ) : (
          <Menu />
        )}
      </Flex>
    </Box>
  )
}

export default Header
