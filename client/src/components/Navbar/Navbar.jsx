import React, { useRef } from "react";
import styles from './Navbar.module.css'
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(`${styles.responsive_nav}`)
    }

    return (
        <div className={styles.navbar}>
            <h3>Verduleria Pepe</h3>
            {/* <nav ref={navRef} className={styles.navlink_container}>
                <NavLink className={styles.navlink} to='/home'>Inicio</NavLink>
                <NavLink className={styles.navlink} to='/aboutus'>Nosotros</NavLink>
                <NavLink className={styles.navlink} to='/services'>Servicios</NavLink>
                <button className={`${styles.nav_btn} ${styles.nav_close_btn}`} onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className={styles.nav_btn} onClick={showNavbar}>
                <FaBars />
            </button> */}
        </div>
    )
}