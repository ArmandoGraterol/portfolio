import React from 'react'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Skills from '../components/Skills'

const SkillPage = ({ location }) => {
  const url = location.href ? location.href : ''

  return (
    <Layout url={url} isCol>
      <Seo title='Skills' />
      <h2 className='page__title'>Skills</h2>
      <Skills />
    </Layout>
  )
}

export default SkillPage
