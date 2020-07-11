import React from 'react'

import ClicheadLogo from '../../images/clichead.svg'
import WeDevelopLogo from '../../images/wedevelop.svg'

import Experience from '../Experience'

import './styles.scss'

const experienceArray = [
  {
    title: 'Frontend developer',
    location: 'Remote',
    startedAt: 'Feb 2019',
    endedAt: null,
    company: { name: 'WeDevelop', logo: WeDevelopLogo, website: 'https://wedevelop.me/' }
  },
  {
    title: 'Web developer',
    location: 'Remote',
    startedAt: 'Jun 2018',
    endedAt: 'Feb 2019',
    company: { name: 'Clichead', logo: ClicheadLogo, website: 'https://clichead.com/' }
  }
]

const ExperienceList = () => (
  <ul class='experience-list'>
    {experienceArray.map((experience, i) => (
      <Experience key={i} experience={experience} />
    ))}
  </ul>
)

export default ExperienceList
