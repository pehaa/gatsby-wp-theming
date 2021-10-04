import React from 'react'
import Layout from '../../../components/Layout'
import Page from '../../../components/Page'

const PageComponent = ({ data, pageContext }) => {
  return (
    <Layout>
      <Page page={data.wpPage} ctx={pageContext} />
    </Layout>
  )
}

export default PageComponent
