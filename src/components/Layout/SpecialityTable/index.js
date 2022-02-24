import React from 'react'
import { Heading } from '@chakra-ui/react'
import styles from './styles.module.css';

export default function SpecialtyTable() {
  return (
    <div className={styles.specialty_table}>
      <div className={styles.table_intro}>
        <Heading textAlign={'center'} color={'lightgray'}>{'My Specialties'}</Heading>
      </div>

      <div className={styles.column}>
        <h3 className={styles.column_head}>
          PROMOTIONAL MATERIAL
        </h3>

        <ul className={styles.column_list}>
          <li className={styles.list_item}>
            Flyers and posters
          </li>

          <li className={styles.list_item}>
            Business cards
          </li>

          <li className={styles.list_item}>
            Facebook and Eventbrite event pages
          </li>

          <li className={styles.list_item}>
            Stickers 
          </li>

          <li className={styles.list_item}>
            Roller banners
          </li>
        </ul>

      </div>

      <div className={styles.column}>
        <h3 className={styles.column_head}>
          FASHION BRANDING AND DESIGN 
        </h3>

        <ul className={styles.column_list}>
          <li className={styles.list_item}>
          Logo design
          </li>
          
          <li className={styles.list_item}>
          Packaging design 
          </li>

          <li className={styles.list_item}>
          Social media logos and banners 
          </li>

          <li className={styles.list_item}>
          Graphic design for clothing
          </li>

          <li className={styles.list_item}>
          House font creation
          </li>
        </ul>

      </div>

      <div className={styles.column}>
        <h3 className={styles.column_head}>
          OUTSIDE OF DESIGN 
        </h3>

        <ul className={styles.column_list}>
          <li className={styles.list_item}>
          Photography
          </li>
          
          <li className={styles.list_item}>
          Album cover artwork 
          </li>

          <li className={styles.list_item}>
          Video editing for workshops/ online courses 
          </li>

          <li className={styles.list_item}>
          Motion graphics for videos (intro, transition and outro slides) 
          </li>

          <li className={styles.list_item}>
          Book and E-book design, layout and illustration
          </li>
        </ul>

      </div>
    </div>
  )
}
