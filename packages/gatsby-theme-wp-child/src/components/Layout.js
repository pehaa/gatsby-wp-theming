import React from 'react'
import Header from './header/Header'
import Footer from './Footer'
import { Flex } from '@chakra-ui/react'

const Layout = ({ children }) => {
  return (
    <Flex minHeight="100vh" flexDirection="column">
      <Header />
      {children}
      <Footer />
    </Flex>
  )
}

export default Layout
