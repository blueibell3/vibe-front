'use client'
import React, { useState } from 'react';
import styles from "../MusicList/MusicList.module.scss";


type Props = {
    imageUrl: string;
    songName: string;
    artistName: string;
    onPlayng?: () => void;
    time: number;
}

const MusicList = (props: Props) => {
    const [isPlaying, setIsPlaying] = useState(true)

    const hanldeClick = () => {
        setIsPlaying(!isPlaying)
    }
    return (
        <div className={styles.MusicListCategory}>
            <div className={styles.MusicListId}>
                <div className={styles.imgCenter}>
                    <img className={styles.MusicListimageUrl} src={props.imageUrl} alt="imageUrl" />
                    {<img src={isPlaying ? '/group.svg' : '/icons/pause.svg'} alt="ap" className={styles.audioPlay} onClick={hanldeClick} />}
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
    )
};

export default MusicList
