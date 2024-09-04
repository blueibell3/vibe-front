'use client';
import React, { useState } from 'react';
import styles from '../BurgerMenu/BurgerMenu.module.scss';
import NavBarMenu from '../NavBarMenu/NavBarMenu';

const BurgerMenu = () => {
    const [menuClicked, setMenuClicked] = useState(false);

    const onClick = () => {
        setMenuClicked(!menuClicked);
    };

    return (
        <>
            <div className={styles.menuNav}>
                <img
                    onClick={onClick}
                    className={`${styles.burgerClass} ${menuClicked ? styles.open : ''}`}
                    src="/burgericon.svg"
                    alt="burger icon"
                />
                <div className={`${styles.burgerMenu} ${menuClicked ? styles.open : ''}`}>
                    <img
                        className={styles.burgerClassInside}
                        onClick={onClick}
                        src="/burgericon.svg"
                        alt="icon"
                    />
                    <NavBarMenu isBurgerMenu={true} />
                </div>
            </div>
        </>
    );
};

export default BurgerMenu;
