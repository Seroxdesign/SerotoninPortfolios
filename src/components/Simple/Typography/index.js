import React from 'react'
import { Text } from '@chakra-ui/react'
import seperateParas from '../../../utils/seperateParagraphs'
import styles from './styles.module.css'

export default function Typography(props) {
  let text_array = seperateParas(props.text)

  return (
    <div className={styles.typography_container}>
      {text_array.map(( para ) => {
          return (
          <div>
              <Text>{para}</Text>
              <br/>
          </div>
          )
      })}
    </div>
  )
}
