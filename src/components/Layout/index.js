import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import 'typeface-rubik'

import Head from '../Head'
import Header from '../Header'
import Footer from '../Footer'

import './styles.scss'

const Layout = ({ url, isCol, children }) => {
  return (
    <div className='layout'>
      <Head />
      <Header url={url} />
      <main className={classnames('layout__content', { 'layout__content--col': isCol })}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
