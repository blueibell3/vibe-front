'use client'
import Image from 'next/image'
import styles from './Header.module.scss'
import UserAvatar from './UserAvatar/UserAvatar'
import Link from 'next/link'
import SearchBar from './SearchBar/SearchBar'
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import { useRecoilState } from 'recoil'
import { isFullscreenState, tabletFullscreenState } from '@/app/state'
import TabletFullscreen from '../PlayerController/TabletFullScreen/TabletFullScreen'

const Header = () => {
    const [FullscreenState] = useRecoilState(isFullscreenState)
    const [tabletscreenState] = useRecoilState(tabletFullscreenState)
    return (
        <div className={FullscreenState || tabletscreenState ? styles.nones : styles.container} >
            <div className={styles.searchLogoContainer}>
                <div className={styles.searchLogo}>
                    <Link href='/'>
                        <Image src='/logo.png' alt='logo' width={141} height={39} className={styles.logo} />
                    </Link>
                    <div className={styles.menuMain}>
                        <BurgerMenu />
                    </div>
                </div>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.searchContainer}>
                    <SearchBar />
                </div>
                <UserAvatar gmail={'G.sanikidze@gmail.com'} />
            </div>
        </div>
    )
}

export default Header