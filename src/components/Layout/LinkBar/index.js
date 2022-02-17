import React from 'react'
import { Link } from '@chakra-ui/react'
import Links from '../../../assets/Data/Links/Links'
import styles from './styles.module.css'

export default function LinkBar() {
  return (
    <div className={styles.link_bar}>
       {Links.map(( link ) => {
          return (
          <Link href={`${link.link}`} target={"_blank"}>
            <img src={link.img} alt="social media link" className={styles.img}/>
          </Link>
          )
        })}
    </div>
  )
}
