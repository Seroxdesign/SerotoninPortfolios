import React from 'react'
import styles from './styles.module.css'

export default function ContentTable(props) {
  return (
    <nav className={styles.contentNav}>
        <h3 className={styles.contentTitle}>
          Businesses
        </h3>
        <ul className={styles.contentList}>
           <li className={styles.content_item}>
              Public Enemy Apparel
           </li>
           <li className={styles.content_item}>
              Curb Talk Podcast
           </li>
           <li className={styles.content_item}>
              The Bearded Bakery
           </li>
           <li className={styles.content_item}>
              Come closer artwork
           </li>
           <li className={styles.content_item}>
              Logo Design
           </li>
           <li className={styles.content_item}>
              Photographer
           </li>
        </ul>

        <h3 className={styles.contentTitle}>
          Blogs
        </h3>
        <ul className={styles.contentList}>
          <li className={styles.content_item}>
              Unlocking Imagination
           </li>
           <li className={styles.content_item}>
              Business And Friends
           </li>
           <li className={styles.content_item}>
              The time is now.
           </li>
        </ul>
    </nav>
  )
}
