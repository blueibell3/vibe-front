import Image from 'next/image'
import styles from './Header.module.scss'

export default () => {
    return(
    <div className={styles.container}>
        <Image src='/logo.svg' alt='logo' width={91} height={39}/>
        <input className={styles.search} type='search' />
    </div>
    )
}