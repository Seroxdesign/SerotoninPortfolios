import React from 'react'
import styles from './styles.module.css'

export default function BlogCard(props) {
  return (
    <div className={styles.BlogCard}>
        <div className={styles.img_container}>
            <img src={props.img} className={styles.img}/>
        </div>
        
        <div className={styles.blog_content}>
          <div>
          <h3 className={styles.header}>{props.title}</h3>
            <p className={styles.para}>
                {props.para}
            </p>
          </div>
            
            <a href={props.link} target="_blank" className={styles.linkTo}>Read more</a>
        </div>
    </div>
  )
}
