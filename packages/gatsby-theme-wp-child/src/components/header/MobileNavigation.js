import React from 'react'
import { Button, Fade, Box, useDisclosure } from '@chakra-ui/react'

const MobileNavigation = ({ children }) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <Button aria-label="Options" variant="outline" onClick={onToggle}>
        {isOpen ? 'Less' : 'Menu'}
      </Button>
      <Box
        position="absolute"
        left="0"
        right="0"
        top="100%"
        shadow="lg"
        bg="white"
      >
        <Fade in={isOpen} unmountOnExit={true}>
          <Box px={8} pb={6}>
            {children}
          </Box>
        </Fade>
      </Box>
    </>
  )
}

export default MobileNavigation
