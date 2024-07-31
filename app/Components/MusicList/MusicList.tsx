import React from 'react';
import styles from "../MusicList/MusicList.module.scss";


type Props = {
    imageUrl: string;
    songName: string;
    artistName: string;
    onPlay: () => void;
    time: string;
}

const MusicList = (props: Props) => {
    return (
        <div className={styles.MusicListCategory}>
            <div className={styles.MusicListId}>
                <div className={styles.imgCenter}>
                    <img className={styles.MusicListimageUrl} src={props.imageUrl} alt="imageUrl" />
                    <img src="Group.svg" alt="ap" className={styles.audioPlay} />
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
