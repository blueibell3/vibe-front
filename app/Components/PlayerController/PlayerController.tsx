'use client';
import React from 'react';
import styles from './PlayerController.module.scss';
import PreviousButton from './PreviousButton/PreviousButton';
import PlayPauseButton from './PlayPauseButton/PlayPauseButton';
import NextButton from './NextButton/NextButton';
import ShuffleButton from './ShuffleButton/ShuffleButton';
import FastForwardButton from './FastForwardButton/FastForwardButton';
import RewindButton from './RewindButton/RewindButton';
import TimeDisplay from './TimeDisplay/TimeDisplay';
import NoNFullVol from './VolumeControl/NonFullVol';

type Props = {
    currentTrack: {
        photo: { url: string };
        name: string;
        artistName: string;
    } | null; // Allow null if track is not loaded
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
};

const PlayerController: React.FC<Props> = ({
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
    onEnterFullscreen
}) => {
    // Fallback values
    const trackPhotoUrl = currentTrack?.photo?.url || '/path/to/default/image.png'; // Default image if undefined
    const trackName = currentTrack?.name || 'Unknown Track';
    const artistName = currentTrack?.artistName || 'Unknown Artist';

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.trackInfo} onClick={onEnterFullscreen}>
                    <img 
                        src={trackPhotoUrl} 
                        alt={trackName} 
                        className={styles.trackPhoto} 
                    />
                    <div className={styles.trackDetails}>
                        <div className={styles.artistName}>{artistName}</div>
                        <div className={styles.trackName}>{trackName}</div>
                    </div>
                </div>
                <TimeDisplay currentTime={currentTime} duration={duration} onTimeUpdate={onTimeUpdate} />
                <div className={styles.functionality}>
                    <div className={styles.volume}>
                        <NoNFullVol />
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
