import React from 'react'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import ExperienceList from '../components/ExperienceList'
import ProjectList from '../components/ProjectList'

import './styles.scss'

const WorkPage = ({ location }) => {
  const url = location.href ? location.href : ''

  return (
    <Layout url={url} isCol>
      <Seo title='Work' />
      <h2 className='page__title'>Experience</h2>
      <ExperienceList />
      <h2 className='page__title'>Projects</h2>
      <ProjectList />
    </Layout>
  )
}

export default WorkPage
