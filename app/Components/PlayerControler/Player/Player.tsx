'use client'
import MobilePlayer from '../MobilePlayer/MobilePlayer';
import TabletPlayer from '../TabletPlayer/TabletPlayer/TabletPlayer';
import styles from './Player.module.scss';
import PlayerAndListComp from './PlayerAndListComp/PlayerAndListComp';

const Player = () => {
    return (
        <>
            <div className={styles.desktopPlayer}>
                <PlayerAndListComp />
            </div>
            <div className={styles.tabletPlayer}>
                <TabletPlayer />
            </div>
            <div className={styles.mobilePlayer}>
                <MobilePlayer />
            </div>
        </>
    );
};

export default Player;
