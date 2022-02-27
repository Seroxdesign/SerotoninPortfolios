import React, { useState } from 'react'
import { ButtonGroup } from '@chakra-ui/react'
import Popover from '../../Layout/Popover'
import styles from './styles.module.css'

export default function ProjectCard(props) {

  const [popoverStatus, setStatus] = useState(false)

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
          <button className={styles.btn} onClick={() => (setStatus( popoverStatus ? false : true ))}>
            View More
          </button>

          <button className={styles.btn_invert}>
            Contact Me
          </button>
        </ButtonGroup>
      </div>
      <div >
        {
          popoverStatus ?  
          <div>
            <Popover imgs={props.imgs}/>
            <button className={styles.close_popover} onClick={() => (setStatus( popoverStatus ? false : true ))}>
              x
            </button>
          </div>
          : ''
        }
      </div>

    
    </div>
  )
}
