import React from 'react'
import Layout from '../../../components/Layout'
import ArchiveContent from '../../../components/archive/ArchiveContent'

const CategoryComponent = ({ data, pageContext }) => {
  return (
    <Layout>
      <ArchiveContent
        posts={data.allWpPost}
        ctx={pageContext}
        name={data.wpCategory.name}
      />
    </Layout>
  )
}

export default CategoryComponent
