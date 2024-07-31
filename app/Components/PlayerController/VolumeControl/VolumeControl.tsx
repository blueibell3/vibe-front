'use client';
import React from 'react';
import { useRecoilState } from 'recoil';
import { volumeState } from '@/app/state';
import styles from './VolumeControl.module.scss';

const VolumeControl: React.FC = () => {
    const [volume, setVolume] = useRecoilState(volumeState);

    const adjustVolume = (change: number) => {
        setVolume(prevVolume => Math.max(0, Math.min(100, prevVolume + change)));
    };

    return (
        <div className={styles.volumeControl}>
            <button onClick={() => adjustVolume(-10)} className={styles.button}>
                <img src="/icons/volumeDown.svg" alt="Decrease Volume" className={styles.icon} />
            </button>
            <div className={styles.sliderContainer}>
                <div 
                    className={styles.slider} 
                    style={{ width: volume ? `${volume}%` : '0%' }}
                />
            </div>
            <button onClick={() => adjustVolume(10)} className={styles.button}>
                <img src="/icons/volumeUp.svg" alt="Increase Volume" className={styles.icon} />
            </button>
        </div>
    );
};

export default VolumeControl;
