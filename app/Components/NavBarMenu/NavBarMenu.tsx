'use client'
import React from 'react';
import styles from '../NavBarMenu/NavBarMenu.module.scss';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


type Props = {
    isBurgerMenu: boolean;
}

const desktoplinkData = [
    {
        id: 1,
        href: '/',
        text: 'home',
        src: '/home.svg',
        key: '/'
    },
    {
        id: 2,
        href: '/artist',
        text: 'Artist',
        src: '/artist.svg',
        key: '/artist'
    },
    {
        id: 3,
        href: '/playlist',
        text: 'Playlist',
        src: '/playlist.svg',
        key: '/playlist'
    },
    {
        id: 4,
        href: '/albums',
        text: 'Albums',
        src: '/albums.svg',
        key: '/albums'
    },
]


const NavBarMenu = (props: Props) => {
    const pathname = usePathname()
    const handleLogOut = () => {
        document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        window.location.reload();
    };
    return (
        <>
            <span className={styles.emailText}>G.sanikidze@gmail.com</span>
            <nav className={`${styles.navBarContainer} ${props.isBurgerMenu ? styles.noPadding : ''}`}>
                <ul className={styles.navBarC}>
                    {desktoplinkData.map(category => (
                        <Link key={category.id} className={`${pathname === category.key ? styles.activeClasses : styles.barClass}`} href={category.href}>
                            <li className={styles.menuList}>
                                <img className={styles.menuListImg} src={category.src} />
                                <div className={styles.menuItem}>{category.text}</div>
                            </li>
                        </Link>

                    ))}
                </ul>
                <div className={styles.longOut} onClick={handleLogOut}>
                    <img src='/longout icoon.svg' alt='log out button' width={30} height={24} />
                    <span>Log out</span>
                </div>
            </nav>
        </>
    )
}

export default NavBarMenu