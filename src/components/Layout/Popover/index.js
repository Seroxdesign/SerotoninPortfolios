import React, {useState} from 'react'
import styles from './styles.module.css'

export default function PopoverContainer(props) {

  const [img_array, set_array] = useState(props.imgs)
  const [img_index, set_index] = useState(0)

  console.log(set_array)

  return (
      <div className={styles.pop_over}>
        <div className={styles.popover_body}>
        <p>
          {props.para.map((p, i) => {
            if(p===``){
              return <div style={{marginTop: '2em'}}></div>
            }
            else{
              return <div className={styles.text}>
                {p}
              </div>
            }
          })}
        </p>
        {img_array.map((img, i) => {
          return <div className={styles.project_img} onClick={()=> {set_index(img_index+1)}}  onKeyDown={(e) => {if(e.key === 'Enter') set_index(img_index+1)}} tabIndex={i} style={{backgroundImage: `url('${img}')`, backgroundSize:'cover'}}></div>
        })}
        </div>
      </div>   
  )
}
