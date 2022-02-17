import React from 'react'
import { NavLink } from 'react-router-dom'
import { getAnalytics, logEvent } from "firebase/analytics";
import { SimpleGrid } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import styles from './styles.module.css';

const breakpoints = createBreakpoints({
    sm: '320px',
    lg: '1024px',
  })  

export default function Navbar() {

  const analytics = getAnalytics();
  
  return (
    <SimpleGrid columns={{sm: '1', lg: '3'}} h='100%' w='100%' p={'1em'}>
        <div className=''>

        </div>

        <div className=''>

        </div>

        <div className={styles.nav}>
            <NavLink exact to={"/"} onClick={() => logEvent(analytics, "Clicked Home Page")} className={(thisNav) => thisNav.isActive ? styles.active_link : ''}>
                Home
            </NavLink>
            <NavLink exact to={"/about"} onClick={() => logEvent(analytics, "Clicked About Page")}  className={(thisNav) => thisNav.isActive ? styles.active_link : ''}>
                About
            </NavLink>
            <NavLink exact to={"/portfolio"} onClick={() => logEvent(analytics, "Clicked Portfolio Page")}  className={(thisNav) => thisNav.isActive ? styles.active_link : ''}>
                Portfolio
            </NavLink>
            <NavLink exact to={"/shop"} onClick={() => logEvent(analytics, "Clicked Shop Page")}  className={(thisNav) => thisNav.isActive ? styles.active_link : ''}>
                Shop
            </NavLink>
            <NavLink exact to={"/login"} onClick={() => logEvent(analytics, "Clicked Login Page")}  className={(thisNav) => thisNav.isActive ? styles.active_link : ''}>
                Login
            </NavLink>
        </div>
    </SimpleGrid>
  )
}
