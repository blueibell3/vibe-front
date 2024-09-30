// TabletFullScreen.tsx
'use client';
import React, { useState } from 'react';
import styles from './TabletFullScreen.module.scss';
import FastForwardButton from '../FastForwardButton/FastForwardButton';
import NextButton from '../NextButton/NextButton';
import PlayPauseButton from '../PlayPauseButton/PlayPauseButton';
import PreviousButton from '../PreviousButton/PreviousButton';
import RewindButton from '../RewindButton/RewindButton';
import ShuffleButton from '../ShuffleButton/ShuffleButton';
import TimeDisplay from '../TimeDisplay/TimeDisplay';
import VolumeControl from '../VolumeControl/VolumeControl';
import Arrows from '../Arrows/Arrows';
import MusicList from '../../MusicList/MusicList';
import { useRecoilValue } from 'recoil';
import { playlistState, currentTrackIndexState } from '@/app/state';
import TabletArrow from './TabletArrow/TabletArrow';

type Track = {
    name: string;
    artist: string;
    url: string;
    photo?: { url: string }; // Optional property for photo
};

type Props = {
    audioRef: React.RefObject<HTMLAudioElement>;
    currentTrack: Track; // Define currentTrack here
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
};

const TabletFullscreen = ({
    audioRef,
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
}: Props) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const playlist = useRecoilValue(playlistState);
    const currentTrackIndex = useRecoilValue(currentTrackIndexState);

    const handleArrowClick = () => {
        setIsExpanded(!isExpanded);
    };

    const trackPhotoUrl = currentTrack.photo?.url || '';

    return (
        <div className={`${styles.fullscreenContainer} ${isExpanded ? styles.expanded : ''}`}>
            <div className={styles.fullscreenWrapper}>
                <div className={styles.zoomOut}>
                    <img src="/icons/back.svg" alt="zoomOut" onClick={onExitFullscreen} className={styles.back} />
                </div>
                <div className={styles.trackInfo}>
                    <img src={trackPhotoUrl} alt={currentTrack.name} className={styles.trackPhoto} />
                </div>
                <div className={styles.trackDetails}>
                    <div className={styles.artistName}>{currentTrack.artist}</div>
                    <div className={styles.trackName}>{currentTrack.name}</div>
                </div>
                <div className={styles.shuffle}>
                    <ShuffleButton />
                </div>
                <div className={styles.timeDisplay}>
                    <TimeDisplay
                        currentTime={currentTime}
                        duration={duration}
                        onTimeUpdate={onTimeUpdate}
                    />
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
            <div className={styles.tabletArrow}>
                <TabletArrow />
            </div>
            <div className={`${styles.arrowWrapper} ${isExpanded ? styles.expanded : ''}`}>
                <Arrows isUp={!isExpanded} onClick={handleArrowClick} />
                <div className={styles.MusicList}>
                    <span className={styles.nextSpan}>Next Play</span>
                    {playlist.slice(0, isExpanded ? 6 : 0).map((track, index) => (
                        <MusicList
                            key={index}
                            imageUrl={track.photo?.url} 
                            songName={track.name}
                            artistName={track.artist}
                            trackIndex={index}
                            trackUrl={track.url} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TabletFullscreen;
