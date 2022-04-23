import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { UserContext } from '../../../lib/context';
import styles from './styles.module.css';

export default function Navbar() {
    const { user } = useContext(UserContext);
    return (
    <div className={styles.navbar_wrapper}>
        <NavLink to={"/"}  className={(thisNav) => thisNav.isActive ? styles.active_link : ''}>
            Home
        </NavLink>
        <NavLink to={"/about"}  className={(thisNav) => thisNav.isActive ? styles.active_link : ''}>
            About
        </NavLink>
        <NavLink to={"/portfolio"}  className={(thisNav) => thisNav.isActive ? styles.active_link : ''}>
            Portfolio
        </NavLink>
        <NavLink to={"/shop"}  className={(thisNav) => thisNav.isActive ? styles.active_link : ''}>
            Shop
        </NavLink>
        <NavLink to={user ? "/admin" : "/login"} className={(thisNav) => thisNav.isActive ? styles.active_link : ''}>
            {
                user ? 
                'Admin'
                :
                'Login'
            }
        </NavLink>
    </div>
  )
}
