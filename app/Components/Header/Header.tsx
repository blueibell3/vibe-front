import Image from 'next/image'
import styles from './Header.module.scss'
import UserAvatar from './UserAvatar/UserAvatar'
import Link from 'next/link'

export default () => {
    let longout = '/longout icoon.svg'
    return (
        <div className={styles.container} >
            <div className={styles.searchLogoContainer}>
                <div className={styles.searchLogo}>
                    <Link href= '/'> 
                    <Image src='/logo.svg' alt='logo' width={91} height={39} />
                    </Link>
                    <div className={styles.searchContainer}>
                        <input className={styles.search} type='text' placeholder='Search' />
                        <Image src='/search icon.svg' width={24} height={24} alt='search icon' className={styles.icon} />
                    </div>
                </div>
            </div>
            <div>
                <UserAvatar url={longout} gmail={'G.sanikidze@gmail.com'} />
            </div>
        </div>
    )
}