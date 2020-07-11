import React from 'react'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Home from '../components/Home'

const IndexPage = ({ location }) => {
  const url = location.href ? location.href : ''

  return (
    <Layout url={url}>
      <Seo title='Home' />
      <Home />
    </Layout>
  )
}
export default IndexPage
