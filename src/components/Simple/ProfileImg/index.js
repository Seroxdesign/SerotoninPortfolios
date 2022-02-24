import React from 'react'
import styles from './styles.module.css'

export default function ProfileImg(props) {
  return (
    <img src={props.img} alt={'Profile Image'} className={styles.profileImg}>
        
    </img>
  )
}
