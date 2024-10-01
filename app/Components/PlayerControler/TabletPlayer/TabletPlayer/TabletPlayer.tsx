import TabletMusicName from '../TabletMusicName/TabletMusicName';
import styles from './TabletPlayer.module.scss';
import { useRecoilState } from 'recoil';
import { fullScreenState, globalImageState, indexState } from '@/app/state';
import TabletFullScreen from '../../TabletFullScreen/TabletFullScreen';
import DesktopMusicSwitch from '../../DesktopMusicSwitch/DesktopMusicSwitch';
import DesktopInputRange from '../../DesktopPlayer/DesktopInputRange/DesktopInputRange';
import Shuffle from '../../Shuffle/Shufle';

const TabletPlayer = () => {
    const [fullScreen, setFullScreen] = useRecoilState(fullScreenState);
    const [image] = useRecoilState(globalImageState);
    const [index] = useRecoilState(indexState);

    const tabletFullScreen = () => {
        setFullScreen(!fullScreen);
    };

    return (
        <>
            <div className={styles.tabletPlayer}>
                <div className={styles.tabletPlayerContainer}>
                    <div
                        className={styles.tabletMuscName}
                        onClick={tabletFullScreen}
                    >
                        <TabletMusicName />
                    </div>
                    <div className={styles.inputAndSwitch}>
                        <DesktopInputRange />
                        <div className={styles.volumAndSwitch}>
                            <DesktopMusicSwitch />
                            <Shuffle />
                        </div>
                    </div>
                </div>
            </div>
            {fullScreen && image[index] && <TabletFullScreen />}
        </>
    );
};

export default TabletPlayer;
