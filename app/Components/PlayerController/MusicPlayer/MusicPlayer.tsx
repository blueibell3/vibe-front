
'use client'
import { useRecoilState, useRecoilValue } from 'recoil';
import { playlistState, currentTrackIndexState } from '@/app/state';
import PlayerController from '../PlayerController';
import FullscreenPlayer from '../FullscreenPlayer/FullscreenPlayer';
import TabletFullscreen from '../TabletFullScreen/TabletFullScreen';
import TabletPlayerController from '../TabletPlayerController/TabletPlayerController';
import { useEffect } from 'react';
import useAudioPlayer from './useAudioPlayer/useAudioPlayer';
import useTrackControls from './useTrackControls/useTrackControls';

const MusicPlayer = () => {
    const playlist = useRecoilValue(playlistState);
    const [currentTrackIndex] = useRecoilState(currentTrackIndexState);
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

    const { audioRef, duration, currentTime } = useAudioPlayer(playlist[currentTrackIndex]?.url, volume, isMuted);

    const currentTrack = playlist[currentTrackIndex];

    const handleTimeUpdate = (time: number) => {
        if (audioRef.current) {
            audioRef.current.currentTime = time;
        }
    };

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
            if (isPlaying) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [currentTrackIndex, playlist, isPlaying]);

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
                    onTimeUpdate={handleTimeUpdate}
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
                    onTimeUpdate={handleTimeUpdate}
                    onEnterFullscreen={toggleFullscreen}
                />
            )}
            {tabletFullscreen ? (
                <TabletFullscreen
                    currentTrack={currentTrack}
                    currentTime={currentTime}
                    duration={duration}
                    isPlaying={isPlaying}
                    onPlayPause={handlePlayPause}
                    onPrevious={handlePrevious}
                    onNext={handleNext}
                    onFastForward={() => handleFastForward(audioRef)}
                    onRewind={() => handleRewind(audioRef)}
                    onTimeUpdate={handleTimeUpdate}
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
                    onTimeUpdate={handleTimeUpdate}
                    onEnterFullscreen={toggleTabletFullscreen}
                />
            )}
        </>
    );
};

export default MusicPlayer;