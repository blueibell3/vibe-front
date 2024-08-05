'use client';
import React, { useRef, useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil';
import {
    currentTrackIndexState,
    playlistState,
    volumeState,
    isPlayingState,
    isFullscreenState,
} from '@/app/state';
import PlayerController from '../PlayerController'
import FullscreenPlayer from '../FullscreenPlayer/FullscreenPlayer';

const MusicPlayer: React.FC = () => {
    const playlist = useRecoilValue(playlistState);
    const [currentTrackIndex, setCurrentTrackIndex] = useRecoilState(currentTrackIndexState);
    const volume = useRecoilValue(volumeState);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const [isFullscreen, setIsFullscreen] = useRecoilState(isFullscreenState);
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

    const handleEnterFullscreen = () => {
        setIsFullscreen(true);
    };

    const handleExitFullscreen = () => {
        setIsFullscreen(false);
    };

    return (
        <>
            <audio ref={audioRef} src={currentTrackUrl} />
            {isFullscreen ? (
                <FullscreenPlayer
                    currentTrack={currentTrack}
                    currentTime={currentTime}
                    duration={duration}
                    isPlaying={isPlaying}
                    onPlayPause={handlePlayPause}
                    onPrevious={handlePrevious}
                    onNext={handleNext}
                    onFastForward={handleFastForward}
                    onRewind={handleRewind}
                    onTimeUpdate={handleTimeUpdate}
                    onExitFullscreen={handleExitFullscreen}
                />
            ) : (
                <PlayerController
                    currentTrack={currentTrack}
                    currentTime={currentTime}
                    duration={duration}
                    isPlaying={isPlaying}
                    onPlayPause={handlePlayPause}
                    onPrevious={handlePrevious}
                    onNext={handleNext}
                    onFastForward={handleFastForward}
                    onRewind={handleRewind}
                    onTimeUpdate={handleTimeUpdate}
                    onEnterFullscreen={handleEnterFullscreen}
                />
            )}
        </>
    );
};

export default MusicPlayer;
