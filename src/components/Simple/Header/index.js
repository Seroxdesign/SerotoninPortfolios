import React from 'react'
import styles from './styles.module.css'

export default function Header(props) {
  return (
    <h1 className={styles.header}>
        {props.heading}
    </h1>
  )
}
