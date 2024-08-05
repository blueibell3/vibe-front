'use client';
import React, { useRef, useEffect, useState } from 'react';
import styles from './FullscreenPlayer.module.scss';

import { useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil';
import { currentTrackIndexState, playlistState, volumeState, isPlayingState, isFullscreenState } from '@/app/state';
import FastForwardButton from '../FastForwardButton/FastForwardButton';
import NextButton from '../NextButton/NextButton';
import PlayPauseButton from '../PlayPauseButton/PlayPauseButton';
import PreviousButton from '../PreviousButton/PreviousButton';
import RewindButton from '../RewindButton/RewindButton';
import ShuffleButton from '../ShuffleButton/ShuffleButton';
import TimeDisplay from '../TimeDisplay/TimeDisplay';
import VolumeControl from '../VolumeControl/VolumeControl';

const FullscreenPlayer: React.FC = () => {
    const playlist = useRecoilValue(playlistState);
    const [currentTrackIndex, setCurrentTrackIndex] = useRecoilState(currentTrackIndexState);
    const volume = useRecoilValue(volumeState);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [duration, setDuration] = useState<number>(0);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const setIsFullscreen = useSetRecoilState(isFullscreenState);

    const currentTrack = playlist[currentTrackIndex];
    const currentTrackUrl = currentTrack.url;

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume / 100;
        }
    }, [volume]);

    useEffect(() => {
        if (audioRef.current) {
            const handleTimeUpdate = () => setCurrentTime(audioRef.current!.currentTime);
            const handleLoadedMetadata = () => {
                setDuration(audioRef.current!.duration);
                setCurrentTime(audioRef.current!.currentTime);
            };

            audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
            audioRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);

            if (audioRef.current.readyState >= 1) {
                handleLoadedMetadata();
            } else {
                audioRef.current.addEventListener('loadeddata', handleLoadedMetadata);
            }

            return () => {
                audioRef.current!
            };
        }
    }, [currentTrackUrl]);

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying]);

    useEffect(() => {
        if (audioRef.current && isPlaying) {
            audioRef.current.play();
        }
    }, [currentTrackUrl]);

    const handlePlayPause = () => {
        setIsPlaying(prev => !prev);
    };

    const handlePrevious = () => {
        setCurrentTrackIndex(prevIndex => (prevIndex - 1 + playlist.length) % playlist.length);
        setIsPlaying(true);
    };

    const handleNext = () => {
        setCurrentTrackIndex(prevIndex => (prevIndex + 1) % playlist.length);
        setIsPlaying(true);
    };

    const handleFastForward = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = Math.min(audioRef.current.duration, audioRef.current.currentTime + 5);
        }
    };

    const handleRewind = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 5);
        }
    };

    const handleTimeUpdate = (time: number) => {
        if (audioRef.current) {
            audioRef.current.currentTime = time;
        }
    };

    const handleExitFullscreen = () => {
        setIsFullscreen(false);
    };

    return (
        <div className={styles.fullscreenContainer}>
            <div className={styles.fullscreenWrapper}>
                <audio ref={audioRef} src={currentTrackUrl} />
                <div className={styles.trackInfo}>
                    <img src={currentTrack.photo} alt={currentTrack.name} className={styles.trackPhoto} onClick={handleExitFullscreen} />
                    <div className={styles.trackDetails}>
                        <div className={styles.artistName}>{currentTrack.artist}</div>
                        <div className={styles.trackName}>{currentTrack.name}</div>
                    </div>
                </div>
                <div className={styles.shuffle}>
                    <ShuffleButton />
                </div>
                <div className={styles.timeDisplay}>
                    <TimeDisplay currentTime={currentTime} duration={duration} onTimeUpdate={handleTimeUpdate} />
                </div>
                <div className={styles.functionality}>
                    <PreviousButton onClick={handlePrevious} />
                    <RewindButton onClick={handleRewind} />
                    <PlayPauseButton onClick={handlePlayPause} isPlaying={isPlaying} />
                    <FastForwardButton onClick={handleFastForward} />
                    <NextButton onClick={handleNext} />
                </div>
                <div className={styles.volume}>
                    <VolumeControl />
                </div>
            </div>
        </div>
    );
};

export default FullscreenPlayer;
