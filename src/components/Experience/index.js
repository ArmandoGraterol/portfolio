import React from 'react'
import classnames from 'classnames'

import './styles.scss'

const Experience = ({ experience: { title, location, startedAt, endedAt, company } }) => (
  <li class='experience'>
    <div class='experience__position-main-info'>
      <h3 className='experience__position-name'>{title}</h3>
      <p className='experience__position-location'>At {company.name}, {location}</p>
    </div>
    <div className='experience__position-date'>
      <p className='experience__date'>{startedAt}</p>
      <span className='experience__date-separator'>-</span>
      <p className='experience__date'>{endedAt || 'Now'}</p>
    </div>
    <a
      className={classnames('experience__company-website', {
        'experience__company-website--we-develop': company.name === 'WeDevelop'
      })}
      href={company.website}
    >
      <img src={company.logo} className='experience__company-logo' alt={company.name} />
    </a>
  </li>
)

export default Experience
