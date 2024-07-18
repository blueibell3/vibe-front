'use client'
import React, { use, useState } from 'react';
import styles from '../BurgerMenu/BurgerMenu.module.scss';
import Link from 'next/link';
import NavBarMenu from '../NavBarMenu/NavBarMenu';


export default () => {

    const [menuClicked, setMenuClicked] = useState(false);

    const onClick = () => {
        setMenuClicked(!menuClicked);

    }

    return (
        <>
            <nav  className={styles.menuNav}>
              <img onClick={onClick} className={styles.burgerClass} src="burgericon.svg" alt="burger icon" />

                {
                    menuClicked &&
                    <div className={styles.burgerMenu}>
                        <img className={styles.burgerMenuImg} onClick={onClick} src="burgericon.svg" alt="icon" />
                        <NavBarMenu />
                    </div>
                }
            </nav>
        </>
    )
}