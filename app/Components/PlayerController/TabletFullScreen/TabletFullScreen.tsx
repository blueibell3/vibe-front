'use client';
import React from 'react';
import styles from './TabletFullScreen.module.scss'
import FastForwardButton from '../FastForwardButton/FastForwardButton';
import NextButton from '../NextButton/NextButton';
import PlayPauseButton from '../PlayPauseButton/PlayPauseButton';
import PreviousButton from '../PreviousButton/PreviousButton';
import RewindButton from '../RewindButton/RewindButton';
import ShuffleButton from '../ShuffleButton/ShuffleButton';
import TimeDisplay from '../TimeDisplay/TimeDisplay';
import VolumeControl from '../VolumeControl/VolumeControl';

type Props = {
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

const TabletFullscreen = (props: Props) => {
    return (
        <div className={styles.fullscreenContainer}>
            <div className={styles.fullscreenWrapper}>
                <div className={styles.zoomOut}>
                    <img src="./icons/back.svg" alt="zoomOut" onClick={props.onExitFullscreen} className={styles.back} />
                </div>
                <div className={styles.trackInfo}>
                    <img src={props.currentTrack.photo} alt={props.currentTrack.name} className={styles.trackPhoto} />
                    <div className={styles.trackDetails}>
                        <div className={styles.artistName}>{props.currentTrack.artist}</div>
                        <div className={styles.trackName}>{props.currentTrack.name}</div>
                    </div>
                </div>
                <div className={styles.shuffle}>
                    <ShuffleButton />
                </div>
                <div className={styles.timeDisplay}>
                    <TimeDisplay currentTime={props.currentTime} duration={props.duration} onTimeUpdate={props.onTimeUpdate} />
                </div>
                <div className={styles.functionality}>
                    <PreviousButton onClick={props.onPrevious} />
                    <RewindButton onClick={props.onRewind} />
                    <PlayPauseButton onClick={props.onPlayPause} isPlaying={props.isPlaying} />
                    <FastForwardButton onClick={props.onFastForward} />
                    <NextButton onClick={props.onNext} />
                </div>
                <div className={styles.volume}>
                    <VolumeControl />
                </div>
            </div>
        </div>
    );
};

export default TabletFullscreen;
