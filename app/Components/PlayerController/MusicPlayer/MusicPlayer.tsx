'use client'

import { useRecoilState, useRecoilValue } from 'recoil';
import { playlistState, currentTrackIndexState } from '@/app/state';
import PlayerController from '../PlayerController';
import FullscreenPlayer from '../FullscreenPlayer/FullscreenPlayer';
import TabletFullscreen from '../TabletFullScreen/TabletFullScreen';
import TabletPlayerController from '../TabletPlayerController/TabletPlayerController';
import { useEffect, useRef } from 'react';
import useAudioPlayer from './useAudioPlayer/useAudioPlayer';
import useTrackControls from './useTrackControls/useTrackControls';

const MusicPlayer = () => {
    const playlist = useRecoilValue(playlistState);
    const [currentTrackIndex, setCurrentTrackIndex] = useRecoilState(currentTrackIndexState);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const {
        isPlaying,
        isFullscreen,
        tabletFullscreen,
        handlePlayPause,
        handlePrevious,
        handleNext,
        handleFastForward,
        handleRewind,
        toggleFullscreen,
        toggleTabletFullscreen,
        volume,
        isMuted,
    } = useTrackControls();

    const { duration, currentTime } = useAudioPlayer(playlist[currentTrackIndex]?.url, volume, isMuted);

    const currentTrack = playlist[currentTrackIndex] || {};

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying, audioRef]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    }, [currentTrackIndex, playlist]);

    return (
        <>
            <audio ref={audioRef} />
            {isFullscreen ? (
                <FullscreenPlayer
                    currentTrack={currentTrack}
                    currentTime={currentTime}
                    duration={duration}
                    isPlaying={isPlaying}
                    onPlayPause={handlePlayPause}
                    onPrevious={handlePrevious}
                    onNext={handleNext}
                    onFastForward={() => handleFastForward(audioRef)}
                    onRewind={() => handleRewind(audioRef)}
                    onTimeUpdate={(time) => { if (audioRef.current) audioRef.current.currentTime = time; }}
                    onExitFullscreen={toggleFullscreen}
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
                    onFastForward={() => handleFastForward(audioRef)}
                    onRewind={() => handleRewind(audioRef)}
                    onTimeUpdate={(time) => { if (audioRef.current) audioRef.current.currentTime = time; }}
                    onEnterFullscreen={toggleFullscreen}
                />
            )}
            {tabletFullscreen ? (
                <TabletFullscreen
                    audioRef={audioRef}
                    currentTrack={currentTrack} 
                    currentTime={currentTime}
                    duration={duration}
                    isPlaying={isPlaying}
                    onPlayPause={handlePlayPause}
                    onPrevious={handlePrevious}
                    onNext={handleNext}
                    onFastForward={() => handleFastForward(audioRef)}
                    onRewind={() => handleRewind(audioRef)}
                    onTimeUpdate={(time) => { if (audioRef.current) audioRef.current.currentTime = time; }}
                    onExitFullscreen={toggleTabletFullscreen}
                />
            ) : (
                <TabletPlayerController
                    currentTrack={currentTrack}
                    currentTime={currentTime}
                    duration={duration}
                    isPlaying={isPlaying}
                    onPlayPause={handlePlayPause}
                    onPrevious={handlePrevious}
                    onNext={handleNext}
                    onFastForward={() => handleFastForward(audioRef)}
                    onRewind={() => handleRewind(audioRef)}
                    onTimeUpdate={(time) => { if (audioRef.current) audioRef.current.currentTime = time; }}
                    onEnterFullscreen={toggleTabletFullscreen}
                />
            )}
        </>
    );
};

export default MusicPlayer;
