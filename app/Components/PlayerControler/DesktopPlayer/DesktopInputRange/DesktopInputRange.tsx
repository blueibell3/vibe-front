import React from 'react';
import styles from './DesktopInputRange.module.scss';
import { audioDurrationState, currentTimeState } from '@/app/state';
import { useRecoilState } from 'recoil';
import { formatTime } from '@/app/helpers/FormatTime';

const DesktopInputRange = () => {
    const [audioDuration] = useRecoilState(audioDurrationState);
    const [currentTime, setCurrentTime] = useRecoilState(currentTimeState);

    const progressPercent = (currentTime / audioDuration) * 100;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newTime = parseFloat(event.target.value);
        setCurrentTime(newTime);

        const audioElement = document.querySelector(
            'audio',
        ) as HTMLAudioElement;
        if (audioElement) {
            audioElement.currentTime = newTime;
        }
    };

    return (
        <div className={styles.inputContainer}>
            <input
                type="range"
                value={currentTime}
                min={0}
                max={audioDuration || 0}
                step="0.1"
                className={styles.inputRange}
                style={{
                    background: `linear-gradient(to right, #5E4BE2 ${progressPercent}%, #292929 ${progressPercent}%)`,
                }}
                onChange={handleChange}
            />
            <div className={styles.musicTimeCont}>
                <span className={styles.color}>{formatTime(currentTime)}</span>
                <span className={styles.color}>
                    {formatTime(audioDuration)}
                </span>
            </div>
        </div>
    );
};

export default DesktopInputRange;
