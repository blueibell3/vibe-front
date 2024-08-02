'use client';
import React, { useRef, useEffect, useState } from 'react';
import styles from './PlayerController.module.scss';
import PreviousButton from './PreviousButton/PreviousButton';
import PlayPauseButton from './PlayPauseButton/PlayPauseButton';
import NextButton from './NextButton/NextButton';
import ShuffleButton from './ShuffleButton/ShuffleButton';
import VolumeControl from './VolumeControl/VolumeControl';
import FastForwardButton from './FastForwardButton/FastForwardButton';
import RewindButton from './RewindButton/RewindButton';
import TimeDisplay from './TimeDisplay/TimeDisplay';
import { useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil';
import { currentTrackIndexState, playlistState, volumeState, isPlayingState } from '@/app/state';

const PlayerController: React.FC = () => {
    const playlist = useRecoilValue(playlistState);
    const [currentTrackIndex, setCurrentTrackIndex] = useRecoilState(currentTrackIndexState);
    const volume = useRecoilValue(volumeState);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [duration, setDuration] = useState<number>(0);
    const [currentTime, setCurrentTime] = useState<number>(0);

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
                audioRef.current!.removeEventListener('timeupdate', handleTimeUpdate);
                audioRef.current!.removeEventListener('loadedmetadata', handleLoadedMetadata);
                audioRef.current!.removeEventListener('loadeddata', handleLoadedMetadata);
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

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <audio ref={audioRef} src={currentTrackUrl} />
                <div className={styles.trackInfo}>
                    <img src={currentTrack.photo} alt={currentTrack.name} className={styles.trackPhoto} />
                    <div className={styles.trackDetails}>
                        <div className={styles.artistName}>{currentTrack.artist}</div>
                        <div className={styles.trackName}>{currentTrack.name}</div>
                    </div>
                </div>
                <TimeDisplay currentTime={currentTime} duration={duration} onTimeUpdate={handleTimeUpdate} />
                <div className={styles.functionality}>
                <div className={styles.volume}>
                    <VolumeControl />
                </div>
                    <PreviousButton onClick={handlePrevious} />
                    <RewindButton onClick={handleRewind} />
                    <PlayPauseButton onClick={handlePlayPause} isPlaying={isPlaying} />
                    <FastForwardButton onClick={handleFastForward} />
                    <NextButton onClick={handleNext} />
                    <ShuffleButton />
                </div>
            </div>
        </div>
    );
};

export default PlayerController;