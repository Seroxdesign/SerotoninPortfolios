import React, {useState} from 'react'
import ImgReel from '../../Simple/ImgReel'
import styles from './styles.module.css'

export default function PopoverContainer(props) {

  const [img_array, set_array] = useState(props.imgs)
  const [img_index, set_index] = useState(0)

  return (
      <div className={styles.pop_over}>
        <div className={styles.popover_body}>
        <h2 className={styles.popover_header}>
          {props.para}
        </h2>

        {img_array.map((img, i) => {
          return <div className={styles.project_img} onClick={()=> {set_index(img_index+1)}} style={{backgroundImage: `url('${img}')`, backgroundSize:'cover'}}></div>
        })}
        </div>
      </div>   
  )
}
