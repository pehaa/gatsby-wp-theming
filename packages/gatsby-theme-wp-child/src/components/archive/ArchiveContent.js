import React from 'react'
import { Container } from '@chakra-ui/react'
import PostEntry from '../post/PostEntry'
import ArchiveTitle from './ArchiveTitle'
import Description from './Description'
import Pagination from './Pagination'

const ArchiveContent = ({
  posts,
  ctx,
  name,
  text = 'Posts from: ',
  description,
}) => {
  return (
    <main>
      <Container as="section">
        {name && <ArchiveTitle text={text} name={name} />}
        {description && <Description description={description} />}
        {posts.nodes &&
          posts.nodes.map((post, index) => (
            <PostEntry key={post.id} post={post} isFirst={index === 0} />
          ))}
      </Container>
      <Pagination ctx={ctx} />
    </main>
  )
}

export default ArchiveContent
