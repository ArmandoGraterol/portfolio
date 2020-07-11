import React from 'react'

import './styles.scss'

const Project = ({ project: { name, skills, photo, link } }) => (
  <li className='project'>
    <a href={link}>
      <div className='project__overlay' />
      <div className='project__content'>
        <h4>{name}</h4>
        <ul className='project__tech-list'>
          {skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </div>
      <img src={photo} alt={name} />
    </a>
  </li>
)

export default Project
