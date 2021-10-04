import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { Flex } from '@chakra-ui/react'

const Menu = ({ sx }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      wpMenu(locations: { eq: PRIMARY }) {
        menuItems {
          nodes {
            label
            url
            id
          }
        }
      }
    }
  `)

  return (
    <Flex
      as="nav"
      fontSize="sm"
      fontFamily="heading"
      sx={{
        gap: 6,
        '[aria-current]': {
          fontWeight: 'black',
        },
        ...sx,
      }}
      ml="auto"
    >
      {data.wpMenu.menuItems.nodes.map((el) => {
        return el.url.startsWith('http') ? (
          <a key={el.id} href={el.url}>
            {el.label}
          </a>
        ) : (
          <Link key={el.id} to={el.url}>
            {el.label}
          </Link>
        )
      })}
    </Flex>
  )
}

export default Menu
