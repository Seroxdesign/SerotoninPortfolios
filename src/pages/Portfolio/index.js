import React from 'react'
import { getAnalytics, logEvent } from "firebase/analytics";
import Navbar from '../../components/Layout/Navbar';
import { Grid, GridItem } from '@chakra-ui/react'
import ContentTable from '../../components/Layout/TableofContents';
import { createBreakpoints } from '@chakra-ui/theme-tools'
import ProjectPreviews from '../../components/Layout/ProjectPreviews';
import styles from './styles.module.css'

const breakpoints = createBreakpoints({
  sm: '320px',
  lg: '1024px',
})


export default function Portfolio() {
  return (
    <Grid w='100vw' h='100vh' bg='#1b1b1b' templateColumns={{sm: 'repeat(1fr)', lg: 'repeat(5, 1fr)' }} pos={'fixed'} templateRows='repeat(10, 1fr)'>
      <GridItem colSpan={5} rowSpan={1} bgGradient={'linear(#303030, #1b1b1b)'}>
        <Navbar/>
      </GridItem>

      <GridItem colSpan={{lg: '1', sm: '0'}} rowSpan={9} border={'1px solid white'} w={'80%'} display={{sm: 'none', lg: 'grid'}}>
        <ContentTable />
      </GridItem>

      <GridItem colSpan={4} rowSpan={9} w={'100%'} p={'2em'} overflowY={'scroll'}>
        <ProjectPreviews />
        <BlogPreviews />
      </GridItem>
    </Grid>
  )
}
