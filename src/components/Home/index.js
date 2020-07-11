import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

import './styles.scss'

const Home = () => {
  return (
    <div className='home'>
      <div className='home__content'>
        <h1 className='home__name'>Armando Graterol</h1>
        <p className='home__job-title'>Frontend developer - Based on Argentina</p>
        <div className='home__contact-section'>
          <p className='home__contact-info home__contact-info--desktop-email'>
            armandogrtrl@gmail.com
          </p>
          <a
            className='home__contact-info home__contact-info--mobile-email'
            href='mailto:armandogrtrl@gmail.com'
          >
            <FontAwesomeIcon icon={faEnvelope} size='lg' />
          </a>
          <a href='https://www.linkedin.com/in/armandograterol/' className='home__contact-info'>
            <FontAwesomeIcon icon={faLinkedin} size='lg' />
          </a>
          <a href='https://github.com/armandograterol' className='home__contact-info'>
            <FontAwesomeIcon icon={faGithub} size='lg' />
          </a>
        </div>
      </div>
      <div className='home__photo' />
    </div>
  )
}

export default Home
