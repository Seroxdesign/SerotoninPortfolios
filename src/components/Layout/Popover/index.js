import React from 'react'
import ImgReel from '../../Simple/ImgReel'
import styles from './styles.module.css'

export default function PopoverContainer(props) {
  return (
      <div className={styles.pop_over}>
        <div className={styles.popover_body}>
          <div className={styles.img_reel_container}>
            <ImgReel imgs={props.imgs}/>
          </div>
          <hr></hr>
          <div className={styles.content_container}>

          </div>
        </div>
      </div>   
  )
}
