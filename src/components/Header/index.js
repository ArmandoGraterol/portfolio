import React from 'react'
import { faHome, faCode, faFolder } from '@fortawesome/free-solid-svg-icons'

import HeaderLink from '../HeaderLink'

import './styles.scss'

const links = [
  { icon: faHome, url: '/', name: 'Home' },
  { icon: faCode, url: '/skills', name: 'Skills' },
  { icon: faFolder, url: '/work', name: 'Work' }
]

const Header = () => (
  <header className='header'>
    {links.map((link, index) => (
      <HeaderLink
        key={index}
        icon={link.icon}
        url={link.url}
        name={link.name}
      />
    ))}
  </header>
)

export default Header
