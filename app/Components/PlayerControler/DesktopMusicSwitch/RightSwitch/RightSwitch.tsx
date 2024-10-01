import React from 'react';
import { useRecoilState } from 'recoil';
import {
    indexState,
    isPlayingState,
    musicGlobalState,
    shuffleState,
} from '@/app/state';
import styles from './RightSwitch.module.scss';

const RightSwitch = () => {
    const [, setIndex] = useRecoilState(indexState);
    const [musicSrc] = useRecoilState(musicGlobalState);
    const [, setIsPlaying] = useRecoilState(isPlayingState);
    const [isShuffle] = useRecoilState(shuffleState);

    const handleNextTrack = () => {
        if (isShuffle) {
            const randomIndex = Math.floor(Math.random() * musicSrc.length);
            setIndex(randomIndex);
        } else {
            setIndex((prevIndex) => (prevIndex + 1) % musicSrc.length);
        }
        setIsPlaying(true);
    };

    return (
        <img
            className={styles.RightSwitch}
            src="/allFolders/PlayerControler/RightTwist.svg"
            alt="Right Twist"
            onClick={handleNextTrack}
        />
    );
};

export default RightSwitch;
