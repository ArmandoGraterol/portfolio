import React from 'react'

import './styles.scss'

const Skill = ({ name, logo }) => (
  <li className='skill'>
    <img src={logo} className='skill__logo' alt='' />
    <span className='skill__name'>{name}</span>
  </li>
)

export default Skill
