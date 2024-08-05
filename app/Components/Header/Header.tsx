import Image from 'next/image'
import styles from './Header.module.scss'
import UserAvatar from './UserAvatar/UserAvatar'
import Link from 'next/link'
import SearchBar from './SearchBar/SearchBar'

const Header = () => {
    return (
        <div className={styles.container} >
            <div className={styles.searchLogoContainer}>
                <div className={styles.searchLogo}>
                    <Link href='/'>
                        <Image src='/logo.svg' alt='logo' width={91} height={39} />
                    </Link>
                    <div className={styles.searchContainer}>
                        <SearchBar />
                    </div>
                </div>
            </div>
            <div>
                <UserAvatar gmail={'G.sanikidze@gmail.com'} />
            </div>
        </div>
    )
}

export default Header