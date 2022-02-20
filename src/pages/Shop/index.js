import React from 'react'
import { getAnalytics, logEvent } from "firebase/analytics";
import Navbar from '../../components/Layout/Navbar';
import { Grid, GridItem } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import styles from './styles.module.css'

const breakpoints = createBreakpoints({
  sm: '320px',
  lg: '1024px',
})


export default function Shop() {
  return (
    <Grid w='100vw' h='100vh' bg='#1b1b1b' templateColumns={{sm: 'repeat(1fr)', lg: 'repeat(5, 1fr)' }} templateRows='repeat(10, 1fr)'>
      <GridItem colSpan={5} rowSpan={1} bgGradient={'linear(#303030, #1b1b1b)'}>
        <Navbar/>
      </GridItem>
      
      <h1 style={{color: 'white'}}>Under construction</h1>
    </Grid>
  )
}
