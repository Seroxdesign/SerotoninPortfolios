import React, { useState } from 'react'
import { ButtonGroup } from '@chakra-ui/react'
import Popover from '../../Layout/Popover'
import formLinks from '../../../assets/Forms/FormLinks'
import styles from './styles.module.css'

export default function ProjectCard(props) {

  const [popoverStatus, setStatus] = useState(false)

  return (
    <div className={styles.project_card} styles={{flexDirection: `${props.direction}`}}>
      <div className={styles.img_container} style={{backgroundImage: `url('${props.img}')`, backgroundSize: 'cover'}}>
      </div>
     

      <div className={styles.project_details}>
        <h3 className={styles.product_header}>{props.title}</h3>

        <ButtonGroup>
          <button className={styles.btn} onClick={() => (setStatus( popoverStatus ? false : true ))}>
            View More
          </button>

          <a href={`${formLinks.contact_form}`} target={"_blank"}>
            <button className={styles.btn_invert} >
              Contact Me
            </button>
          </a>
          
        </ButtonGroup>
      </div>
      <div >
      {
          popoverStatus ?  
          <div>
            <Popover imgs={props.imgs} para={props.para}/>
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
