import React from 'react'
import { getAnalytics, logEvent } from "firebase/analytics";
import Navbar from '../../components/Layout/Navbar';
import { Grid, GridItem } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import SpecialtyTable from '../../components/Layout/SpecialityTable';
import SkillGrid from '../../components/Layout/SkillGrid';
import Introduction from '../../components/Layout/Introduction';
import styles from './styles.module.css'

const breakpoints = createBreakpoints({
  sm: '320px',
  lg: '1024px',
})


export default function About() {
  return (
    <Grid w='100vw' h='100vh' bg='#1b1b1b' templateColumns={{sm: 'repeat(1fr)', lg: 'repeat(5, 1fr)' }} templateRows='repeat(10, 1fr)' pos={'fixed'}>
      <GridItem colSpan={5} rowSpan={1} bgGradient={'linear(#303030, #1b1b1b)'}>
        <Navbar/>
      </GridItem>
      
      <GridItem colSpan={5} rowSpan={9} h={'100%'} w={'100%'} overflowY={'scroll'} paddingLeft={{sm: '5vw', lg: '10vw'}} paddingRight={{sm: '5vw', lg: '10vw'}} overflowY={'scroll'}>
        <Introduction />
        <SpecialtyTable />
        <SkillGrid />
      </GridItem>
    </Grid>
  )
}
