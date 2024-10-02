'use client'
import MobileMusicName from './MobileMusicName/MobileMusicName';
import styles from './MobilePlayer.module.scss';
import { useRecoilState } from 'recoil';
import { fullScreenState, globalImageState, indexState } from '@/app/state';
import TabletFullScreen from '../TabletFullScreen/TabletFullScreen';
import DesktopMusicSwitch from '../DesktopMusicSwitch/DesktopMusicSwitch';

const MobilePlayer = () => {
    const [fullScreen] = useRecoilState(fullScreenState);
    const [image] = useRecoilState(globalImageState);
    const [index] = useRecoilState(indexState);

    return (
        <>
            <div className={styles.mobilePlayer}>
                <div className={styles.mobilePlayerContainer}>
                    <MobileMusicName />
                    <DesktopMusicSwitch />
                </div>
            </div>
            {fullScreen && image[index] && <TabletFullScreen />}
        </>
    );
};

export default MobilePlayer;
