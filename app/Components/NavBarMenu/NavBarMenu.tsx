import React from 'react';
import styles from '../NavBarMenu/NavBarMenu.module.scss';
import Link from 'next/link';


export default () => {
    return (
        <>
            <nav className={styles.navBarContainer}>
                <ul className={styles.navBarC}>
                    <Link className={styles.menuItem} href="Home" >
                    <li className={styles.menuList}>
                        <img className={styles.menuListImg} src="home.svg" alt="home" />
                        <div className={styles.menuItem}>Home</div>
                    </li>
                    </Link>
                   <Link  className={styles.menuItem} href="Artist">
                   <li className={styles.menuList}>
                        <img className={styles.menuListImg} src="artist.svg" alt="Artist" />
                        <div className={styles.menuItem}>Artist</div>
                    </li>
                   </Link>
                   <Link  className={styles.menuItem} href="Playlist">
                   <li className={styles.menuList}>
                        <img className={styles.menuListImg} src="playlist.svg" alt="Playlist" />
                        <div className={styles.menuItem}>Playlist</div>
                    </li>
                   </Link>
                   <Link  className={styles.menuItem} href="Albums">
                   <li className={styles.menuList}>
                        <img className={styles.menuListImg} src="albums.svg" alt="home" />
                        <div className={styles.menuItem}>Albums</div>
                    </li>
                   </Link>
                </ul>
            </nav>
        </>
    )
}