import React from 'react'
import styles from './styles.module.css'

export default function Skill(props) {
  return (
    <a href={props.link} className={styles.skillBox}>
      <img src={props.img} alt={props.title} className={styles.skillIcon}/>
      <h3 className={styles.skillTitle}>{props.title}</h3>
    </a>
  )
}
