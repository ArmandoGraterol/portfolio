import React from 'react'

import HTMLLogo from '../../images/html5.svg'
import CSSLogo from '../../images/css3.svg'
import JavascriptLogo from '../../images/javascript.svg'
import NodeLogo from '../../images/node-dot-js.svg'
import ReactLogo from '../../images/react.svg'
import SassLogo from '../../images/sass.svg'
import VueLogo from '../../images/vue-dot-js.svg'
import GraphQLLogo from '../../images/graphql.svg'

import Skill from '../Skill'

import './styles.scss'

const skillArray = [
  { name: 'HTML5', logo: HTMLLogo },
  { name: 'CSS', logo: CSSLogo },
  { name: 'Javascript', logo: JavascriptLogo },
  { name: 'Node.js', logo: NodeLogo },
  { name: 'Sass', logo: SassLogo },
  { name: 'React', logo: ReactLogo },
  { name: 'Vue.js', logo: VueLogo },
  { name: 'GraphQL', logo: GraphQLLogo }
]

const Skills = () => (
  <ul className='skills'>
    {skillArray.map((skill, index) => (
      <Skill key={index} name={skill.name} logo={skill.logo} />
    ))}
  </ul>
)

export default Skills
