'use client'

import React from 'react';
import styles from '../MusicCard/MusicCard.module.scss'
import LikeButton from '../LikeButton/LikeButton';
import { useRecoilState } from 'recoil';
import { currentTrackIndexState, isPlayingState, currentTimeState } from '@/app/state';


type Props = {
    imageUrl: string;
    songName: string;
    artistName: string;
    trackIndex: number;
}

const MusicCard = (props: Props) => {
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
        <div className={styles.musicCard} onClick={handleClick}>
            <div className={styles.musicCardComp}>
                <div className={styles.musiccardList}>
                    <img className={styles.musicCardImage} src={props.imageUrl} alt='image' />
                    <img src="/Group.svg" alt="ap" className={styles.audioPlay} />
                    <div className={styles.musicCardInfo}>
                        <h3 className={styles.songName}>{props.songName}</h3>
                        <p className={styles.artistName}>{props.artistName}</p>
                    </div>
                </div>
                <div className={styles.musicCardHeart}>
                    <LikeButton />
                </div>
            </div>
        </div>
    )
}

export default MusicCard