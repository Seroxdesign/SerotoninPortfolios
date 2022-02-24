import React from 'react'
import { getAnalytics, logEvent } from "firebase/analytics";
import Navbar from '../../components/Layout/Navbar';
import ProjectPreviews from '../../components/Layout/ProjectPreviews';
import styles from './styles.module.css'

export default function Portfolio() {
  return (

    <>
      <div className={styles.portfolio_grid}>
        <div className={styles.grid_item}>
          <Navbar/>
        </div>

        <div className={styles.grid_content}>
          <ProjectPreviews />
        </div>
      </div>
    </>
    
  )
}
