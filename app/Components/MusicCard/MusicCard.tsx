'use client'

import React from 'react';
import styles from '../MusicCard/MusicCard.module.scss';
import LikeButton from '../LikeButton/LikeButton';
import { useRecoilState } from 'recoil';
import { currentTrackIndexState, isPlayingState, currentTimeState } from '@/app/state';
import Bin from '../Bin/Bin';

type Props = {
    imageUrl: string;
    songName: string;
    artistName: string;
    trackIndex: number;
    showLikeButton: boolean;  
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
        <div className={styles.musicCard}>
            <div className={styles.musicCardComp}>
                <div className={styles.musiccardList}>
                    <img
                        className={styles.musicCardImage}
                        src={props.imageUrl}
                        alt='image'
                        onClick={handleClick}
                    />
                    <img
                        src={isPlaying && currentTrackIndex === props.trackIndex ? '/icons/pause.svg' : '/group.svg'}
                        alt="ap"
                        className={styles.audioPlay}
                        onClick={handleClick}
                    />
                    <div className={styles.musicCardInfo} onClick={handleClick}>
                        <h3 className={styles.songName}>{props.songName}</h3>
                        <p className={styles.artistName}>{props.artistName}</p>
                    </div>
                </div>
                <div className={styles.musicCardHeart}>
                    {props.showLikeButton ? <LikeButton /> : <Bin />}
                </div>
            </div>
        </div>
    );
}

export default MusicCard;
