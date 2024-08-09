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
import { useRecoilState, useRecoilValue } from 'recoil';
import MusicList from '../../MusicList/MusicList';
import { playlistState, currentTimeState, currentTrackIndexState } from '@/app/state';

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
    const [isExpanded, setIsExpanded] = useState(false);
    const playlist = useRecoilValue(playlistState);
    // const currentTime = useRecoilValue(currentTimeState);
    const currentTrackIndex = useRecoilValue(currentTrackIndexState);

    const handleArrowClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            <div className={`${styles.fullscreenContainer} ${isExpanded ? styles.expanded : ''}`}>
                <div className={styles.fullscreenWrapper}>
                    <div className={styles.zoomOut}>
                        <img src="./icons/back.svg" alt="zoomOut" onClick={props.onExitFullscreen} className={styles.back} />
                        <div className={styles.trackInfo}>
                            <img src={playlist[currentTrackIndex].photo} alt={playlist[currentTrackIndex].name} className={styles.trackPhoto} />
                            <div className={styles.trackDetails}>
                                <div className={styles.artistName}>{playlist[currentTrackIndex].artist}</div>
                                <div className={styles.trackName}>{playlist[currentTrackIndex].name}</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.shuffle}>
                        <ShuffleButton />
                    </div>
                    <div className={styles.timeDisplay}>
                        <TimeDisplay
                            currentTime={props.currentTime}
                            duration={props.duration}
                            onTimeUpdate={props.onTimeUpdate}
                        />
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
            <div className={styles.arrowWrapper}>
                <Arrows isUp={!isExpanded} onClick={handleArrowClick} />
                <div className={styles.nextPlay}>
                    <span>Next Play</span>
                </div>
                <div className={styles.MusicList}>
                    
                    {playlist.map((track, index) => (
                        <MusicList
                            key={index}
                            imageUrl={track.photo}
                            songName={track.name}
                            artistName={track.artist}
                            trackIndex={index}
                            time={new Date((track.duration ?? 0) * 1000).toISOString().substr(14, 5)} 
                            />
                    ))}
                </div>
            </div>
        </>
    );
};

export default TabletFullscreen;
