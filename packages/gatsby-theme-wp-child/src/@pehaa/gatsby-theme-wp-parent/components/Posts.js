import React from 'react'
import Layout from '../../../components/Layout'
import ArchiveContent from '../../../components/archive/ArchiveContent'

const Posts = ({ data, pageContext }) => {
  return (
    <Layout>
      <ArchiveContent posts={data.allWpPost} ctx={pageContext} />
    </Layout>
  )
}

export default Posts
