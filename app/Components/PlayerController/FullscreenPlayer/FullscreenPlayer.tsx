'use client';
import React from 'react';
import styles from './FullscreenPlayer.module.scss';
import FastForwardButton from '../FastForwardButton/FastForwardButton';
import NextButton from '../NextButton/NextButton';
import PlayPauseButton from '../PlayPauseButton/PlayPauseButton';
import PreviousButton from '../PreviousButton/PreviousButton';
import RewindButton from '../RewindButton/RewindButton';
import ShuffleButton from '../ShuffleButton/ShuffleButton';
import TimeDisplay from '../TimeDisplay/TimeDisplay';
import VolumeControl from '../VolumeControl/VolumeControl';


interface FullscreenPlayerProps {
    currentTrack: any;
    currentTime: number;
    duration: number;
    isPlaying: boolean;
    onPlayPause: () => void;
    onPrevious: () => void;
    onNext: () => void;
    onFastForward: () => void;
    onRewind: () => void;
    onTimeUpdate: (time: number) => void;
    onExitFullscreen: () => void;
}

const FullscreenPlayer: React.FC<FullscreenPlayerProps> = ({
    currentTrack,
    currentTime,
    duration,
    isPlaying,
    onPlayPause,
    onPrevious,
    onNext,
    onFastForward,
    onRewind,
    onTimeUpdate,
    onExitFullscreen,
}) => {
    return (
        <div className={styles.fullscreenContainer}>
            <div className={styles.fullscreenWrapper}>
                <div className={styles.zoomOut}>
                    <img src="./icons/zoomOut.svg" alt="zoomOut" onClick={onExitFullscreen} />
                </div>
                <div className={styles.trackInfo} >
                    <img src={currentTrack.photo} alt={currentTrack.name} className={styles.trackPhoto} />
                    <div className={styles.trackDetails}>
                        <div className={styles.artistName}>{currentTrack.artist}</div>
                        <div className={styles.trackName}>{currentTrack.name}</div>
                    </div>
                </div>
                <div className={styles.shuffle}>
                    <ShuffleButton />
                </div>
                <div className={styles.timeDisplay}>
                    <TimeDisplay currentTime={currentTime} duration={duration} onTimeUpdate={onTimeUpdate} />
                </div>
                <div className={styles.functionality}>
                    <PreviousButton onClick={onPrevious} />
                    <RewindButton onClick={onRewind} />
                    <PlayPauseButton onClick={onPlayPause} isPlaying={isPlaying} />
                    <FastForwardButton onClick={onFastForward} />
                    <NextButton onClick={onNext} />
                </div>
                <div className={styles.volume}>
                    <VolumeControl />
                </div>
            </div>
        </div>
    );
};

export default FullscreenPlayer;
