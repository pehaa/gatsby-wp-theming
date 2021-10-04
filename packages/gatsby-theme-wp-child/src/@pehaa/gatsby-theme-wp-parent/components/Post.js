import React from 'react'
import Layout from '../../../components/Layout'
import PostEntryFull from '../../../components/post/PostEntryFull'

const Post = ({ data, pageContext }) => {
  return (
    <Layout>
      <PostEntryFull post={data.wpPost} ctx={pageContext} />
    </Layout>
  )
}

export default Post
