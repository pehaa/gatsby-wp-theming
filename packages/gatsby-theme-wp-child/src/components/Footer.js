import React from 'react'
import { Flex } from '@chakra-ui/react'
import { StaticImage } from 'gatsby-plugin-image'

const Footer = () => {
  return (
    <Flex
      as="footer"
      className="site-footer"
      p="6"
      fontSize="sm"
      bg="gray.700"
      color="white"
      mt="auto"
      textAlign="center"
      alignItems="flex-end"
      justifyContent="center"
      sx={{ gap: 4 }}
    >
      Built for Smashing Magazine
      <StaticImage
        src="../images/smashing-magazine.svg"
        alt="Smashing Magazine Logo"
        width={24}
        placeholder="none"
      />
    </Flex>
  )
}

export default Footer
