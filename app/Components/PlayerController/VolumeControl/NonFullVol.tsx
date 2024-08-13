'use client';
import { useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { volumeState } from '@/app/state';
import styles from './VolumeControl.module.scss';

const NoNFullVol = () => {
    const [volume, setVolume] = useRecoilState(volumeState);
    const [isMuted, setIsMuted] = useState(false); 
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const clickSoundRef = useRef<HTMLAudioElement | null>(null);

    const handleSliderClick = (e: React.MouseEvent) => {
        if (sliderRef.current) {
            const rect = sliderRef.current.getBoundingClientRect();
            const offsetX = e.clientX - rect.left;
            const newVolume = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));
            setVolume(newVolume);
            if (newVolume > 0 && isMuted) setIsMuted(false); 
        }
    };

    const toggleMute = () => {
        if (isMuted) {
            setVolume(50);
        } else {
            setVolume(0);
        }
        setIsMuted(!isMuted);
        playClickSound();
    };

    const playClickSound = () => {
        if (clickSoundRef.current) {
            clickSoundRef.current.currentTime = 0;
            clickSoundRef.current.play();
        }
    };

    return (
        <div className={styles.volumeControl}>
            <audio ref={clickSoundRef} src="/sounds/clickSound.mp3" />
            <button
                onClick={toggleMute}
                className={styles.buttons}
            >
                <img
                    src={isMuted ? "/icons/muted.svg" : "/icons/volumeUp.svg"}
                    alt={isMuted ? "Unmute" : "Mute"}
                    className={styles.icon}
                />
            </button>

            <div className={styles.sliderContainer} ref={sliderRef} onMouseDown={handleSliderClick}>
                <div className={styles.slider} style={{ width: `${volume}%` }} />
                <div className={styles.thumb} style={{ left: `${volume}%` }} />
            </div>
        </div>
    );
};

export default NoNFullVol;
