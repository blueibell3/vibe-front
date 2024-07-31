'use client';
import React, { useRef, useEffect } from 'react';
import styles from './PlayerController.module.scss';
import PreviousButton from './PreviousButton/PreviousButton';
import PlayPauseButton from './PlayPauseButton/PlayPauseButton';
import NextButton from './NextButton/NextButton';
import ShuffleButton from './ShuffleButton/ShuffleButton';
import VolumeControl from './VolumeControl/VolumeControl';
import { useRecoilValue, useRecoilState } from 'recoil';
import { currentTrackIndexState, playlistState, volumeState, isPlayingState } from '@/app/state';

const PlayerController: React.FC = () => {
    const playlist = useRecoilValue(playlistState);
    const [currentTrackIndex, setCurrentTrackIndex] = useRecoilState(currentTrackIndexState);
    const volume = useRecoilValue(volumeState);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const currentTrack = playlist[currentTrackIndex];
    const currentTrackUrl = currentTrack.url;

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume / 100;
            if (isPlaying) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [volume, isPlaying, currentTrackUrl]);

    const handlePlayPause = () => {
        setIsPlaying(prev => !prev);
    };

    const handlePrevious = () => {
        setCurrentTrackIndex(prevIndex => (prevIndex - 1 + playlist.length) % playlist.length);
    };

    const handleNext = () => {
        setCurrentTrackIndex(prevIndex => (prevIndex + 1) % playlist.length);
    };

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <audio ref={audioRef} src={currentTrackUrl} />
                <div className={styles.trackInfo}>
                    <img src={currentTrack.photo} alt={currentTrack.name} className={styles.trackPhoto} />
                    <div className={styles.trackDetails}>
                        <div className={styles.trackName}>{currentTrack.name}</div>
                        <div className={styles.artistName}>{currentTrack.artist}</div>
                    </div>
                </div>
                <div className={styles.functionality}>
                    <PreviousButton onClick={handlePrevious} />
                    <PlayPauseButton onClick={handlePlayPause} isPlaying={isPlaying} />
                    <NextButton onClick={handleNext} />
                    <ShuffleButton />
                </div>
                <div className={styles.volume}>
                    <VolumeControl />
                </div>
            </div>
        </div>
    );
};

export default PlayerController;
