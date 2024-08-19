import Image from 'next/image'
import styles from './Header.module.scss'
import UserAvatar from './UserAvatar/UserAvatar'
import Link from 'next/link'
import SearchBar from './SearchBar/SearchBar'
import BurgerMenu from '../BurgerMenu/BurgerMenu'

const Header = () => {
    return (
        <div className={styles.container} >
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