import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import classnames from 'classnames'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { useLocation } from '@reach/router'

import './styles.scss'

const HeaderLink = ({ name, icon, url }) => {
  const { pathname } = useLocation()

  return (
    <AniLink
      cover
      bg='#4174E0'
      to={url}
      className={classnames('header-link', {
        'header-link--active': pathname === url
      })}
    >
      <span className='header-link__tooltip'>{name}</span>
      <FontAwesomeIcon icon={icon} />
    </AniLink>
  )
}

export default HeaderLink
