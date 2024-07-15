import React from 'react';
import styles from '../MusicCard/MusicCard.module.scss'
import LikeButton from '../LikeButton/LikeButton';


type Props = {
    imageUrl: string;
    songName: string;
    artistName: string;
    onClick?: () => void;
}

export default (props: Props) => {

    return (
        <div className={styles.musicCard }>
        <div className={styles.musicCardComp}>
            <div className={styles.musiccardList}>
                <img className={styles.musicCardImage} src={props.imageUrl} alt='image'/>
                <img src="Group.svg" alt="ap"  className={styles.audioPlay}/>
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

