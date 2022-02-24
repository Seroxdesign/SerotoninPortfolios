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

    <div className={styles.navbar_wrapper}>
        <NavLink to={"/"} onClick={() => logEvent(analytics, "Clicked Home Page")} className={(thisNav) => thisNav.isActive ? styles.active_link : ''}>
            Home
        </NavLink>
        <NavLink to={"/about"} onClick={() => logEvent(analytics, "Clicked About Page")}  className={(thisNav) => thisNav.isActive ? styles.active_link : ''}>
            About
        </NavLink>
        <NavLink to={"/portfolio"} onClick={() => logEvent(analytics, "Clicked Portfolio Page")}  className={(thisNav) => thisNav.isActive ? styles.active_link : ''}>
            Portfolio
        </NavLink>
        <NavLink to={"/shop"} onClick={() => logEvent(analytics, "Clicked Shop Page")}  className={(thisNav) => thisNav.isActive ? styles.active_link : ''}>
            Shop
        </NavLink>
        <NavLink to={"/login"} onClick={() => logEvent(analytics, "Clicked Login Page")}  className={(thisNav) => thisNav.isActive ? styles.active_link : ''}>
            Login
        </NavLink>
    </div>
  )
}
