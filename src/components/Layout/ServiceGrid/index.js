import React from 'react'
import ServiceCard from '../../Simple/ServiceCard'
import services from '../../../assets/Data/Services/services'
import styles from './styles.module.css'

export default function ServiceGrid() {
  return (
    <div className={styles.service_grid}>
      {services.map((service, i)=> {
        return <ServiceCard title={service.title} list={service.list} price={service.price}/> 
      })}
    </div>
  )
}
