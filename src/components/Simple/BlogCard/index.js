import React, {useState} from 'react'
import Popover from '../../Layout/Popover'
import styles from './styles.module.css'

export default function BlogCard(props) {

  const [popoverStatus, setStatus] = useState(false)

  return (
    <div className={styles.BlogCard}>
      <div className={styles.img_container}>
          <img src={props.img} className={styles.img} alt={"Blog Image"}/>
      </div>
      
      <div className={styles.blog_content}>
        <div>
          <h3 className={styles.header}>
            {props.title}
          </h3>
          <p className={styles.para} style={{marginTop: '0em'}}>
              {props.para[0]}
          </p>
        </div>
          
          <button className={styles.linkTo} onClick={() => (setStatus( popoverStatus ? false : true ))}>Read more</button>
      </div>
  
      <div>
      {
        popoverStatus ?  
        <div>
          <Popover imgs={['']} para={props.para}/>
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
