import React from 'react'
import styles from './styles.module.css'

export default function SecondaryHeader(props) {
  return (
    <h2 className={styles.heading}>
        {props.heading}
    </h2>
  )
}
