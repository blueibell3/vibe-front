import Link from 'next/link';
import styles from './MobileNavBar.module.scss';

type Props = {
    onClick?: () => void;
}

export default (props: Props) => {

    return (
        <>
            <div className={styles.mobileNavBar}>
                <div className={styles.mobileNavList}>
                    <div className={styles.mobileNavComponent}>
                        <Link className={styles.mobileNavLinks} href='Home'>
                            <img className={styles.mobileNavImg} src="home.svg" alt="home" />
                            <span className={styles.mobileNavText}>home</span>
                        </Link>
                    </div>
                </div>
                <div className={styles.mobileNavList}>
                    <div className={styles.mobileNavComponent}>
                        <Link  className={styles.mobileNavLinks} href='Home'>
                            <img className={styles.mobileNavImg} src="search.svg" alt="Search" />
                            <span className={styles.mobileNavText}>Search</span>
                        </Link>
                   
                    </div>
                </div>
                <div className={styles.mobileNavList}>
                    <div className={styles.mobileNavComponent}>
                        <Link  className={styles.mobileNavLinks} href='Home'>
                            <img className={styles.mobileNavImg} src="library.svg" alt="Library" />
                            <span className={styles.mobileNavText}>Library</span>
                        </Link>
                      
                    </div>
                </div>
                <div className={styles.mobileNavList}>
                    <div className={styles.mobileNavComponent}>
                        <Link  className={styles.mobileNavLinks} href='Profile'>
                            <img className={styles.mobileNavImg} src="profile.svg" alt="Profile" />
                            <span className={styles.mobileNavText}>Profile</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}