import React from 'react'

import ResumeDesignPhoto from '../../images/resumeDesign.png'
import ChatPhoto from '../../images/chat.png'
import ShoppingListPhoto from '../../images/shoppinglist.png'
import CoinMonitorPhoto from '../../images/coinmonitor.png'

import Project from '../Project'

import './styles.scss'

const projectArray = [
  { name: 'Resume website', skills: ['Bootstrap', 'SASS'], photo: ResumeDesignPhoto, link: 'https://github.com/ArmandoGraterol/resume-design' },
  { name: 'Shopping list app', skills: ['React', 'Redux', 'Express', 'PostgreSQL'], photo: ShoppingListPhoto, link: 'https://github.com/ArmandoGraterol/shopping-list' },
  { name: 'Coin monitor', skills: ['React', 'Cryptocompare API'], photo: CoinMonitorPhoto, link: 'https://github.com/ArmandoGraterol/coin-monitor' },
  { name: 'Chat app', skills: ['React', 'Redux', 'NodeJS', 'Websockets'], photo: ChatPhoto, link: 'https://github.com/ArmandoGraterol/chat' }
]

const ProjectList = () => (
  <ul class='project-list'>
    {projectArray.map((project, i) => (
      <Project key={i} project={project} />
    ))}
  </ul>
)

export default ProjectList
