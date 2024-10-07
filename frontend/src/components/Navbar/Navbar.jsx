import React from 'react'
import styles from '../../../src/app/styles/navbar.module.css'; 
import { useState } from "react";
import Image from "next/image";


export function Navbar(){
    const [menuActive, setMenuActive] = useState(false); 

    const toggleMenu = () => {
        setMenuActive(!menuActive); 
    };
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <a href="/">
                    <Image src="/logo.png" alt="Restaurante Misku Logo" width={200} height={50} />
                </a>
            </div>

            <div className={styles.menuIcon} onClick={toggleMenu}>
                &#9776; 
            </div>

            <ul className={`${styles.navLinks} ${menuActive ? styles.active : ''}`}>
                <li><a href="#restaurante" className={styles.reserveBtnN}>RESTAURANTE</a></li>
                <li><a href="#historia" className={styles.reserveBtnN}>HISTORIA</a></li>
                <li><a href="#carta" className={styles.reserveBtnN}>CARTA</a></li>
                <li><a href="#localizacion" className={styles.reserveBtnN}>LOCALIZACION</a></li>
                <li><a href="#reservar" className={styles.reserveBtn}>RESERVAR</a></li>
            </ul>
        </nav>
    )
}