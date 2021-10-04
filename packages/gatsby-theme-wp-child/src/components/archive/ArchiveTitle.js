import React from "react"
import { Heading } from "@chakra-ui/react"

const ArchiveTitle = ({ name, text }) => {
  return (
    <Heading as="h1" textAlign="center" mb="6">
      {text} {name}
    </Heading>
  )
}

export default ArchiveTitle
