import React, { useRef, useState, useEffect } from 'react';
import styles from './TimeDisplay.module.scss';

type Props = {
    currentTime: number;
    duration: number;
    onTimeUpdate: (time: number) => void;
}

const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
};

const TimeDisplay = (props: Props) => {
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
            const newTime = Math.max(0, Math.min(props.duration, (offsetX / rect.width) * props.duration));
            props.onTimeUpdate(newTime);
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
        <>
            <div className={styles.timeDisplay}>
                <div className={styles.progressContainer} ref={progressRef} onMouseDown={handleMouseDown}>
                    <div className={styles.progressBar}>
                        <div className={styles.progress} style={{ width: `${(props.currentTime / props.duration) * 100}%` }} />
                        <div
                            className={styles.thumb}
                            style={{ left: `${(props.currentTime / props.duration) * 100}%` }}
                            onMouseDown={handleMouseDown} />
                    </div>
                </div>
            </div>
            <div className={styles.timer}>
                <span>{formatTime(props.currentTime)}</span>
                <span>{formatTime(props.duration)}</span>
            </div>
        </>

    );
};

export default TimeDisplay;
