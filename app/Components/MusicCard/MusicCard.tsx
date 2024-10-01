'use client'

import React from 'react';
import styles from '../MusicCard/MusicCard.module.scss';
import LikeButton from '../LikeButton/LikeButton';
import { useRecoilState } from 'recoil';
import { currentTrackIndexState, isPlayingState, currentTimeState, globalMusicState } from '@/app/state';
import Bin from '../Bin/Bin';

type Props = {
    id: number;
    imageUrl: string;
    songName: string;
    artistName: string;
    trackIndex: number;
    showLikeButton: boolean;
    onClick: () => void
}

const MusicCard = (props: Props) => {
    const [currentTrackIndex, setCurrentTrackIndex] = useRecoilState(currentTrackIndexState);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const [globalId] = useRecoilState(globalMusicState)
    const [currentTime, setCurrentTime] = useRecoilState(currentTimeState);

    const handleClick = () => {
        if (currentTrackIndex === props.trackIndex && props.id === globalId) {
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
                <div className={styles.musiccardList}  >
                    <img
                        className={styles.musicCardImage}
                        src={props.imageUrl}
                        alt='image'
                        onClick={handleClick}
                    />
                    <img
                        onClick={handleClick}
                        src={isPlaying && currentTrackIndex === props.trackIndex ? '/icons/pause.svg' : '/icons/pauselist.svg'} alt="ap"
                        className={styles.audioPlay}

                    />
                    <div className={styles.musicCardInfo} >
                        <h3 className={styles.songName}>{props.songName}</h3>
                        <p className={styles.artistName}>{props.artistName}</p>
                    </div>
                </div>
                <div className={styles.musicCardHeart} onClick={props.onClick}>
                    {props.showLikeButton ? <LikeButton id={props.id} trackIndex={props.trackIndex} /> : <Bin />}
                </div>
            </div>
        </div>
    );
}

export default MusicCard;
