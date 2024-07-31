'use client'
import Link from 'next/link';
import styles from './NavBarMobile.module.scss';
import { useState } from 'react';
import { usePathname } from 'next/navigation';



const mobilelinkData = [
    {
        href: '/',
        text: 'home',
        src: 'home.svg',
        srcB: 'bluehome.svg',
        
    },
    {

        href: '/search',
        text: 'Search',
        src: 'search.svg',
        srcB: 'bluesearch.svg',
    },
    {
        href: '/library',
        text: 'Library',
        src: 'library.svg',
        srcB: 'bluelibrary.svg',
    },
    {
        href: '/profile',
        text: 'Profile',
        src: 'profile.svg',
        srcB: 'profile.svg',
    },
]


const  NavBarMobile = () => {     

    const pathname = usePathname()

    return (
        <>
            <div className={styles.mobileNavBar}>
            {mobilelinkData.map(category => (
                <Link  onClick={() => pathname === category.href} className={styles.mobileNavLinks} href={category.href}>
                    <img className={styles.mobileNavImg} src={pathname === category.href ?  category.srcB : category.src} />
                    <span className={`${pathname === category.href  ? styles.activeClasses : styles.mobileNavText}`}>{category.text}</span>
                </Link>
            ))}
            </div>
        </>
    )

}    

export default NavBarMobile