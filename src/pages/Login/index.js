import React, { useContext, useState } from 'react'
import Navbar from '../../components/Layout/Navbar';
import { Grid, GridItem } from '@chakra-ui/react'
import { SignInForm } from '../../assets/Forms/LoginForm';
import { createBreakpoints } from '@chakra-ui/theme-tools'
import { UserContext } from '../../lib/context';
import { auth } from '../../lib/firebase';
import styles from './styles.module.css'

const breakpoints = createBreakpoints({
  sm: '320px',
  lg: '1024px',
})


export default function Login() {
  const { user } = useContext(UserContext);
  return (
    <Grid w='100vw' h='100vh' bg='#1b1b1b' templateColumns={{sm: 'repeat(1fr)', lg: 'repeat(5, 1fr)' }} templateRows='repeat(10, 1fr)'>
      <GridItem colSpan={5} rowSpan={1} bgGradient={'linear(#303030, #1b1b1b)'}>
        <Navbar/>
      </GridItem>

      
      <GridItem colSpan={5} rowSpan={9} bgGradient={'linear(#303030, #1b1b1b)'}> 
        {
          user?
          <SignOutButton />
          :
          <SignInForm />
        }
      </GridItem>
    </Grid>
  )
}

function SignOutButton() {
  return (
    <>
      <div className={styles.announcement}>
        <div className={styles.background_img} />
        <h2 className={styles.header}>Coming soon, available 01/05/2022</h2>
      </div>
      <button style={{marginTop: '2em'}} className={styles.sign_out_btn} onClick={() => auth.signOut()}>Sign Out</button>
    </>

  )
}