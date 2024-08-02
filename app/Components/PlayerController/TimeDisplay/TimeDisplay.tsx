import React, { useRef, useState, useEffect } from 'react';
import styles from './TimeDisplay.module.scss';

interface TimeDisplayProps {
    currentTime: number;
    duration: number;
    onTimeUpdate: (time: number) => void;
}

const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ currentTime, duration, onTimeUpdate }) => {
    const progressRef = useRef<HTMLDivElement | null>(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        updateTime(e.clientX);
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (isDragging) {
            updateTime(e.clientX);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const updateTime = (clientX: number) => {
        if (progressRef.current) {
            const rect = progressRef.current.getBoundingClientRect();
            const offsetX = clientX - rect.left;
            const newTime = Math.max(0, Math.min(duration, (offsetX / rect.width) * duration));
            onTimeUpdate(newTime);
        }
    };

    useEffect(() => {
        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        } else {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);

    return (
        <div className={styles.timeDisplay}>
            <span>{formatTime(currentTime)}</span>
            <div className={styles.progressContainer} ref={progressRef} onMouseDown={handleMouseDown}>
                <div className={styles.progressBar}>
                    <div className={styles.progress} style={{ width: `${(currentTime / duration) * 100}%` }} />
                    <div
                        className={styles.thumb}
                        style={{ left: `${(currentTime / duration) * 100}%` }}
                    />
                </div>
            </div>
            <span>{formatTime(duration)}</span>
        </div>
    );
};

export default TimeDisplay;
