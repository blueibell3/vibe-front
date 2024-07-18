import React from 'react';
import styles from '../AlbumCard/AlbumCard.module.scss'
import Link from 'next/link';

type Props = {
  id?: number;
  songName: string;
  imageUrl: string;
  artistName: string;
  year: string;
}

export default (props: Props) => {
  return (
    <Link className={styles.albumCardLink} href={`${props.id}`}>
      <div className={styles.container}>
        <div className={styles.albumCard}>
          <img className={styles.image} src={props.imageUrl} alt="image" />
          <div className={styles.albumCardText}>
            <div className={styles.title}>
              <span className={styles.songName}>{props.songName}</span>
              <span className={styles.year}>{props.year}</span>
            </div>
            <span className={styles.artistName}>{props.artistName}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}