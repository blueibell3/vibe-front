import React from 'react';
import styles from './DesktopFullScreen.module.scss';
import DesktopInputRange from '../DesktopPlayer/DesktopInputRange/DesktopInputRange';
import Shuffle from '../Shuffle/Shufle';
import DesktopVolume from '../DesktopPlayer/DesktopVolume/DesktopVolume';
import DesktopMusicSwitch from '../DesktopMusicSwitch/DesktopMusicSwitch';
import { fullScreenState, globalImageState, indexState } from '@/app/state';
import { useRecoilState } from 'recoil';
import FullScreenName from './DesktopFullScreenName/FullScreenName';

const DesktopFullScreen = () => {
    const [image] = useRecoilState(globalImageState);
    const [, setFullScreen] = useRecoilState(fullScreenState);
    const [index] = useRecoilState(indexState);
    const background = {
        backgroundImage: `url(${image[index]})`,
    };

    return (
        <div className={styles.backgroundCnot} style={background}>
            <div style={background} className={styles.backgroundBox}></div>
            <div className={styles.backgroundContainer}>
                <img
                    className={styles.backIcon}
                    src="/allFolders/PlayerControler/BackButton.svg"
                    alt="Back"
                    onClick={() => setFullScreen(false)}
                />
                <div className={styles.iconImage}></div>
                <div>
                    <FullScreenName />
                </div>
                <div className={styles.inputRangeCont}>
                    <Shuffle />
                    <DesktopInputRange />
                </div>
                <div>
                    <DesktopMusicSwitch />
                    <DesktopVolume
                        width={275}
                        volumeWidth={32}
                        volumeHeight={32}
                        involved={''}
                    />
                </div>
            </div>
        </div>
    );
};

export default DesktopFullScreen;
