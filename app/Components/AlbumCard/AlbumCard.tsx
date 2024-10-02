import React from 'react';
import styles from '../AlbumCard/AlbumCard.module.scss';
import Link from 'next/link';

type Props = {
  id: number;
  songName: string;
  imageUrl: any;
  artistName?: string;
  releaseDate: string;
};

const AlbumCard = (props: Props) => {
  return (
    <Link className={styles.albumCard} href={`/albums/${props.id}`}>
      <img className={styles.image} src={props.imageUrl} alt={props.songName} />
      <div className={styles.albumCardText}>
        <div className={styles.title}>
          <span className={styles.songName}>{props.songName}</span>
          <span className={styles.year}>{props.releaseDate}</span>
        </div>
        <span className={styles.artistName}>{props.artistName}</span>
      </div>
    </Link>
  );
};

export default AlbumCard;
