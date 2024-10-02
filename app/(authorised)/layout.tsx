import { Metadata } from 'next';
import Header from '../Components/Header/Header';
import NavBarMenu from '../Components/NavBarMenu/NavBarMenu';
import NavBarMobile from '../Components/NavBarMobile/NavBarMobile';
import styles from './layout.module.css';
import { ReactNode } from 'react';
import Player from '../Components/PlayerControler/Player/Player';
import MusicListItem from '../Components/MusicListItem/MusicListItem';
import PlayerHandler from '../Components/PlayerControler/Player/PlayerHandler/PlayerHandler';

type Props = {
    children: ReactNode;
};

const AuthLayout = (props: Props) => {
    return (
        <div className={styles.container}>
            <PlayerHandler />
            <div className={styles.headerContainer}>
                <Header />
            </div>
            <div className={styles.pages}>
                <div className={styles.navMenuContainer}>
                    <NavBarMenu isBurgerMenu={true} />
                </div>
                <div className={styles.mobileNavBarContainer}>
                    <NavBarMobile />
                </div>
                <div className={styles.children}>{props.children}</div>
                <div className={styles.musicList}>
                    <div className={styles.test}></div>
                    <div className={styles.musicContainer}>
                        <div className={styles.MusicPlayer}>
                            <Player />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
