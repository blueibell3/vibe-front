import Image from 'next/image'
import styles from './Header.module.scss'
import UserAvatar from './UserAvatar/UserAvatar'

export default () => {
    let longout = '/longout icoon.svg'
    return (
        <div className={styles.container} >
            <div className={styles.searchLogo}>
                <div className={styles.zzzz}>
                    <Image src='/logo.svg' alt='logo' width={91} height={39} />
                    <div className={styles.searchContainer}>
                        <input className={styles.search} type='' placeholder='Search' />
                        <Image src='/search icon.svg' width={24} height={24} alt='search icon' className={styles.icon} />
                    </div>
                </div>
            </div>
            <div>
                <UserAvatar text='Log Out' url={longout} />
            </div>
        </div>
    )
}