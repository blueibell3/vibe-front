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
    time: string;
}

const MusicList = (props: Props) => {
    const [currentTrackIndex, setCurrentTrackIndex] = useRecoilState(currentTrackIndexState);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const [currentTime, setCurrentTime] = useRecoilState(currentTimeState);

    const handleClick = () => {
        if (currentTrackIndex === props.trackIndex) {
            setIsPlaying(!isPlaying);
        } else {
            setCurrentTrackIndex(props.trackIndex);
            setCurrentTime(0);
            setIsPlaying(true);
        }
    }

    return (
        <div className={styles.MusicListCategory} onClick={handleClick}>
            <div className={styles.MusicListId}>
                <div className={styles.imgCenter}>
                    <img className={styles.MusicListimageUrl} src={props.imageUrl} alt="imageUrl" />
                    <img src={isPlaying && currentTrackIndex === props.trackIndex ? '/icons/pause.svg' : '/group.svg'} alt="ap" className={styles.audioPlay} />
                </div>
                <div className={styles.MusicListText}>
                    <div className={styles.MusicListNames}>
                        <div className={styles.songName}>{props.songName}</div>
                        <div className={styles.artistName}>{props.artistName}</div>
                    </div>
                    <span className={styles.MusicListTime}>{props.time}</span>
                </div>
            </div>
        </div>
    );
};

export default MusicList;