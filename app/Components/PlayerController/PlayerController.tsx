'use client';
import React from 'react';
import styles from './PlayerController.module.scss';
import PreviousButton from './PreviousButton/PreviousButton';
import PlayPauseButton from './PlayPauseButton/PlayPauseButton';
import NextButton from './NextButton/NextButton';
import ShuffleButton from './ShuffleButton/ShuffleButton';
import VolumeControl from './VolumeControl/VolumeControl';
import FastForwardButton from './FastForwardButton/FastForwardButton';
import RewindButton from './RewindButton/RewindButton';
import TimeDisplay from './TimeDisplay/TimeDisplay';

interface PlayerControllerProps {
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
    onEnterFullscreen: () => void;
}

const PlayerController: React.FC<PlayerControllerProps> = ({
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
    onEnterFullscreen,
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.trackInfo} onClick={onEnterFullscreen}>
                    <img src={currentTrack.photo} alt={currentTrack.name} className={styles.trackPhoto} />
                    <div className={styles.trackDetails}>
                        <div className={styles.artistName}>{currentTrack.artist}</div>
                        <div className={styles.trackName}>{currentTrack.name}</div>
                    </div>
                </div>
                <TimeDisplay currentTime={currentTime} duration={duration} onTimeUpdate={onTimeUpdate} />
                <div className={styles.functionality}>
                    <div className={styles.volume}>
                        <VolumeControl />
                    </div>
                    <PreviousButton onClick={onPrevious} />
                    <RewindButton onClick={onRewind} />
                    <PlayPauseButton onClick={onPlayPause} isPlaying={isPlaying} />
                    <FastForwardButton onClick={onFastForward} />
                    <NextButton onClick={onNext} />
                    <ShuffleButton />
                </div>
            </div>
        </div>
    );
};

export default PlayerController;
