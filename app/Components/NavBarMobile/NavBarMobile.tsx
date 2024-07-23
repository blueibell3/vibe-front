'use client'
import Link from 'next/link';
import styles from './NavBarMobile.module.scss';
import { useState } from 'react';



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


export default () => {
    const [isClicked, setIsClicked] = useState('/')

    const handleClick = (href: React.SetStateAction<string>) => {         
        setIsClicked(href)
    }        


    return (
        <>
            <div className={styles.mobileNavBar}>
            {mobilelinkData.map((category, index) => (
                <Link key={index} onClick={() => handleClick(category.href)} className={styles.mobileNavLinks} href={category.href}>
                    <img className={styles.mobileNavImg} src={isClicked === category.href ?  category.srcB : category.src} />
                    <span className={`${isClicked === category.href  ? styles.activeClasses : styles.mobileNavText}`}>{category.text}</span>
                </Link>
            ))}
            </div>
        </>
    )

}    