import React from 'react'
import formLinks from '../../../assets/Forms/FormLinks'
import styles from './styles.module.css'


export default function ServiceCard(props) {
  return (
    <div className={styles.service_card}>

      <div className={styles.service_section}>
        <h2 className={styles.main_header}>
          {props.title}
        </h2>

        <h3 className={styles.second_header}>
          {props.price}
        </h3>
      </div>
      
      
      <ul>
        {props.list.map((service, i) => {
          return <li className={styles.service_item}>
            {service}
          </li>
        })}
      </ul>

      <a href={`${formLinks.contact_form}`} target={"_blank"}>
          <button className={styles.button}>
            Get Quote
          </button>
        </a>
    </div>
  )
}
