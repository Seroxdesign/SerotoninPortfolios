import React from 'react'
import Navbar from '../../components/Layout/Navbar';
import SpecialtyTable from '../../components/Layout/SpecialityTable';
import SkillGrid from '../../components/Layout/SkillGrid';
import Introduction from '../../components/Layout/Introduction';
import styles from './styles.module.css'

export default function About() {
  return (
    <div className={styles.about_grid} style={{backgroundColor: '#1b1b1b'}}>
      <div className={styles.grid_item}>
        <Navbar/>
      </div>

      <div className={styles.grid_content} style={{paddingTop: '5em'}}>
        <Introduction />
        <SpecialtyTable />
        <SkillGrid />
      </div>
    </div>
  )
}
