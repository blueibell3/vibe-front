import styles from './DesktopPlayer.module.scss';
import { fullScreenState, globalImageState, indexState } from '@/app/state';
import { useRecoilState } from 'recoil';
import DesktopVolume from './DesktopVolume/DesktopVolume';
import DesktopInputRange from './DesktopInputRange/DesktopInputRange';
import DesktopFullScreen from '../DesktopFullScreen/DesktopFullScreen';
import DesktopMusicName from './DesktopMusicName/DesktopMusicName';
import Shuffle from '../Shuffle/Shufle';
import DesktopMusicSwitch from '../DesktopMusicSwitch/DesktopMusicSwitch';

const DesktopPlayer = () => {
    const [fullScreen] = useRecoilState(fullScreenState);
    const [image] = useRecoilState(globalImageState);
    const [index] = useRecoilState(indexState);

    return (
        <>
            <div className={styles.playerSmall}>
                <div className={styles.nameAndRange}>
                    <DesktopMusicName />
                    <DesktopInputRange />
                </div>
                <div className={styles.musicPlayer}>
                    <DesktopVolume
                        width={50}
                        volumeWidth={24}
                        volumeHeight={24}
                        involved={'none'}
                    />
                    <DesktopMusicSwitch />
                    <Shuffle />
                </div>
            </div>
            {image[index] && fullScreen && <DesktopFullScreen />}
        </>
    );
};

export default DesktopPlayer;
