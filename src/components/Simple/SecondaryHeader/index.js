import React from 'react'
import { Heading } from '@chakra-ui/react'
import styles from './styles.module.css'

export default function SecondaryHeader(props) {
  return (
    <Heading className={styles.heading}>
        {props.heading}
    </Heading>
  )
}
