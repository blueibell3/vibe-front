import DesktopInputRange from '../DesktopPlayer/DesktopInputRange/DesktopInputRange';
import DesktopMusicSwitch from '../DesktopMusicSwitch/DesktopMusicSwitch';
import FullScreenImage from './FullScreenImage/FullScreenImage';
import styles from './TabletFullScreen.module.scss';
import MusicList from './FullScreenMusicList/MusicList';
import TabletName from '../TabletPlayer/TabletMusicName/TabletName/TabletName';
import Shuffle from '../Shuffle/Shufle';

const TabletFullScreen = () => {
    return (
        <div className={styles.TabletFullScreen}>
            <div className={styles.tabletFullscreenPadd}>
                <div className={styles.imageAndName}>
                    <FullScreenImage />
                    <TabletName />
                </div>
                <div className={styles.inputRangeCont}>
                    <Shuffle />
                    <DesktopInputRange />
                </div>
                <div>
                    <DesktopMusicSwitch />
                </div>
            </div>
            <div className={styles.musicListContainer}>
                <MusicList />
            </div>
        </div>
    );
};

export default TabletFullScreen;
