'use client'
import React from 'react';
import styles from '../NavBarMenu/NavBarMenu.module.scss';

import { usePathname } from 'next/navigation';
import Link from 'next/link';


const desktoplinkData = [
    {
        href: '/',
        text: 'home',
        src: 'home.svg',
        key: '/'
    },
    {
        href: '/artist',
        text: 'Artist',
        src: 'artist.svg',
        key: '/artist'
    },
    {
        href: '/playlist',
        text: 'Playlist',
        src: 'playlist.svg',
        key: '/playlist'
    },
    {
        href: '/albums',
        text: 'Albums',
        src: 'albums.svg',
        key: '/albums'
    },
]

const NavBarMenu = () => {

    const pathname = usePathname()
    
    return (
        <>
            <nav className={styles.navBarContainer}>
                <ul className={styles.navBarC}>
                {desktoplinkData.map(category => (
                <Link className={`${pathname === category.key ? styles.activeClasses : styles.barClass}`} href={category.href}>
                    <li className={styles.menuList}>
                        <img className={styles.menuListImg} src={category.src} />
                        <div className={styles.menuItem}>{category.text}</div>
                    </li>
                </Link>
            ))}
                  
                </ul>
            </nav>
        </>
    )
}

export default NavBarMenu