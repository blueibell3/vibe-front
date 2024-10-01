'use client';
import Link from 'next/link';
import styles from './NavBarMobile.module.scss';
import { usePathname } from 'next/navigation';
import { useRecoilState } from 'recoil';
import { tabletFullScrenState } from '@/app/state';

const mobilelinkData = [
    {
        id: 1,
        href: '/',
        text: 'home',
        src: '/home.svg',
        srcB: '/bluehome.svg',
    },
    {
        id: 2,
        href: '/search',
        text: 'Search',
        src: '/search.svg',
        srcB: '/bluesearch.svg',
    },
    {
        id: 3,
        href: '/library',
        text: 'Library',
        src: '/library.svg',
        srcB: '/bluelibrary.svg',
    },
    {
        id: 4,
        href: '/profile',
        text: 'Profile',
        src: '/profile.svg',
        srcB: '/profile.svg',
    },
];

const NavBarMobile = () => {
    const pathname = usePathname();
    const [tabletscreenState] = useRecoilState(tabletFullScrenState);

    return (
        <>
            <div
                className={
                    tabletscreenState ? styles.nones : styles.mobileNavBar
                }
            >
                {mobilelinkData.map((category) => (
                    <Link
                        key={category.id}
                        onClick={() => pathname === category.href}
                        className={styles.mobileNavLinks}
                        href={category.href}
                    >
                        <img
                            className={styles.mobileNavImg}
                            src={
                                pathname === category.href
                                    ? category.srcB
                                    : category.src
                            }
                        />
                        <span
                            className={`${pathname === category.href ? styles.activeClasses : styles.mobileNavText}`}
                        >
                            {category.text}
                        </span>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default NavBarMobile;
