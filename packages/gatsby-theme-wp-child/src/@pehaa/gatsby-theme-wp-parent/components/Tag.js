import React from 'react'
import Layout from '../../../components/Layout'
import ArchiveContent from '../../../components/archive/ArchiveContent'

const TagComponent = ({ data, pageContext }) => {
  return (
    <Layout>
      <ArchiveContent
        posts={data.allWpPost}
        ctx={pageContext}
        name={data.wpTag.name}
      />
    </Layout>
  )
}

export default TagComponent
