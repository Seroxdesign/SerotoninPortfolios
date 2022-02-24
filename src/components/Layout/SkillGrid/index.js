import React from 'react'
import Skill from '../../Simple/SkillBox'
import skills from '../../../assets/Data/Skills/skills'
import styles from './styles.module.css'

export default function SkillGrid() {
  return (
    <div className={styles.skillgrid}>
      {skills.map((skill, i) => {
            return <Skill img={skill.icon} title={skill.title} link={skill.link} key={`skill-box-${i}`}></Skill>
      })}
    </div>
       
  )
}
