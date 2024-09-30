'use client';
import React from 'react';
import { useRecoilState } from 'recoil';
import { currentTrackIndexState, isPlayingState, currentTimeState } from '@/app/state';
import styles from '../MusicList/MusicList.module.scss';

type Props = {
    imageUrl: string;
    songName: string;
    artistName: string;
    trackUrl: string; // Make sure to use this prop
    trackIndex: number;
}

const MusicList: React.FC<Props> = ({ imageUrl, songName, artistName, trackUrl, trackIndex }) => {
    const [currentTrackIndex, setCurrentTrackIndex] = useRecoilState(currentTrackIndexState);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const [currentTime, setCurrentTime] = useRecoilState(currentTimeState);

    const handleClick = () => {
        if (currentTrackIndex === trackIndex) {
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
