import styles from './VolumeControl.module.scss'
import React, { useRef } from 'react';
import { useRecoilState } from 'recoil';
import { volumeState } from '@/app/state';

const NoNFullVol = () => {
    const [volume, setVolume] = useRecoilState(volumeState);
    const sliderRef = useRef<HTMLDivElement | null>(null);

    const adjustVolume = (change: number) => {
        setVolume(prevVolume => Math.max(0, Math.min(100, prevVolume + change)));
    };
    const handleSliderClick = (e: React.MouseEvent) => {
        if (sliderRef.current) {
            const rect = sliderRef.current.getBoundingClientRect();
            const offsetX = e.clientX - rect.left;
            const newVolume = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));
            setVolume(newVolume);
        }
    };
    return (
        <div className={styles.volumeControl}>
            <button onClick={() => adjustVolume(10)} className={styles.button}>
                <img src="/icons/volumeUp.svg" alt="Increase Volume" className={styles.icon} />
            </button>
            <div className={styles.sliderContainer} ref={sliderRef} onMouseDown={handleSliderClick}>
                <div className={styles.slider} style={{ width: `${volume}%` }} />
                <div className={styles.thumb} style={{ left: `${volume}%` }} />
            </div>
        </div>
    )
}

export default NoNFullVol