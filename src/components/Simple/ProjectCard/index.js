import React from 'react'
import { ButtonGroup } from '@chakra-ui/react'
import styles from './styles.module.css'

export default function ProjectCard(props) {
  return (
    <div className={styles.project_card} styles={{flexDirection: `${props.direction}`}}>
      <div className={styles.img_container}>
        <img src={props.img} alt={props.title} className={styles.project_img}></img>
        <h3 className={styles.product_header}>{props.title}</h3>
      </div>
     

      <div className={styles.project_details}>

        <p className={styles.product_para}>
          {props.para}
        </p>

        <ButtonGroup marginTop={'1em'}>
          <button className={styles.btn}>
            View More
          </button>

          <button className={styles.btn_invert}>
            Contact Me
          </button>
        </ButtonGroup>
      </div>
    </div>
  )
}
