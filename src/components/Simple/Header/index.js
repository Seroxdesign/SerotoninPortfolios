import React from 'react'
import { Heading } from '@chakra-ui/react'
import styles from './styles.module.css'

export default function Header(props) {
  return (
    <Heading className={styles.header}>
        {props.heading}
    </Heading>
  )
}
