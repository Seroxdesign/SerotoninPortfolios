import { Button } from '@chakra-ui/react'
import React, {useState} from 'react'
import styles from './styles.module.css'

export default function ImgReel(props) {

  const [img_array, set_array] = useState(props.imgs)
  const [img_index, set_index] = useState(0)

  return (
    <div className={styles.img_reel_container}>
      <img className={styles.project_img} onClick={()=> {set_index(img_index+1)}} src={img_array[img_index]}></img>
    </div>
  )
}
