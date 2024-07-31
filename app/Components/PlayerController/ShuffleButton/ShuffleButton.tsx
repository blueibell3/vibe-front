'use client';
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { playlistState, isShufflingState, currentTrackIndexState } from '@/app/state';
import styles from './ShuffleButton.module.scss';

const ShuffleButton: React.FC = () => {
    const [isShuffling, setIsShuffling] = useRecoilState(isShufflingState);
    const [playlist, setPlaylist] = useRecoilState(playlistState);
    const [currentTrackIndex, setCurrentTrackIndex] = useRecoilState(currentTrackIndexState);

    const toggleShuffle = () => {
        setIsShuffling(!isShuffling);
        if (!isShuffling) {
            setPlaylist(shuffleArray(playlist));
            setCurrentTrackIndex(0); 
        }
    };

    const shuffleArray = (array: string[]) => {
        let shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };
    return (
        <div>
            <button className={styles.controlButton} onClick={toggleShuffle}>
                <img
                    src='/icons/shuffle.svg'
                    alt={isShuffling ? 'Shuffle On' : 'Shuffle Off'}
                    className={styles.icon}
                />
            </button>
        </div>
    );
};

export default ShuffleButton;
