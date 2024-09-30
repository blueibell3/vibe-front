'use client';
import React from 'react';
import styles from "../MusicList/MusicList.module.scss";
import { useRecoilState } from 'recoil';
import { currentTrackIndexState, isPlayingState, currentTimeState } from '@/app/state';

type Props = {
    imageUrl: string;
    songName: string;
    artistName: string;
    trackIndex: number;
    // time: string;
}

const MusicList = (props: Props) => {
    const [currentTrackIndex, setCurrentTrackIndex] = useRecoilState(currentTrackIndexState);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const [currentTime, setCurrentTime] = useRecoilState(currentTimeState);

    const handleClick = () => {
        if (currentTrackIndex === props.trackIndex) {
            // Toggle play/pause if the same track is clicked
            setIsPlaying(!isPlaying);
        } else {
            // Set the new track index and play the track
            setCurrentTrackIndex(trackIndex);
            setCurrentTime(0);
            setIsPlaying(true);
            // Here you can also handle playing the track
            const audio = new Audio(trackUrl);
            audio.play();
        }
    };

    return (
        <div className={styles.MusicListCategory} onClick={handleClick}>
            <div className={styles.MusicListId}>
                <div className={styles.imgCenter}>
                    <img
                        src={isPlaying && currentTrackIndex === trackIndex ? '/icons/pause.svg' : '/icons/pauselist.svg'}
                        alt="Play/Pause"
                        className={styles.audioPlay}
                    />
                    <img className={styles.MusicListimageUrl} src={imageUrl} alt="Track artwork" />
                </div>
                <div className={styles.MusicListText}>
                    <div className={styles.MusicListNames}>
                        <div className={styles.songName}>{songName}</div>
                        <div className={styles.artistName}>{artistName}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MusicList;
