import React from 'react';
import styles from "../MusicList/MusicList.module.scss";



const musicData = [
    {
        imageUrl: 'https://daprintfactory.com/cdn/shop/files/music-cds-music-covers-print-1.png?v=1690954711',
        songName: 'Unwritten',
        artistName: 'Natasha Bedingfield',
        time: '4:17',
    },
    {
      
        imageUrl: 'https://daprintfactory.com/cdn/shop/files/music-cds-music-covers-print-1.png?v=1690954711',
        songName: 'Sledgehammer',
        artistName: 'Fifth Harmony',
        time: '3:49',
    },
    {
        imageUrl: 'https://daprintfactory.com/cdn/shop/files/music-cds-music-covers-print-1.png?v=1690954711',
        songName: 'You will never know',
        artistName: 'Imany',
        time: '3:00',
    },
    {
        imageUrl: 'https://daprintfactory.com/cdn/shop/files/music-cds-music-covers-print-1.png?v=1690954711',
        songName: 'Song Sign of the times',
        artistName: 'Harry Styles',
        time: '5:49',
    },
    {
        imageUrl: 'https://daprintfactory.com/cdn/shop/files/music-cds-music-covers-print-1.png?v=1690954711',
        songName: 'Song Mockingbird',
        artistName: 'Eminem',
        time: '4:11',
    },
    {
        imageUrl: 'https://daprintfactory.com/cdn/shop/files/music-cds-music-covers-print-1.png?v=1690954711',
        songName: 'Here comes the sun Two',
        artistName: 'The Beatles',
        time: '3:06',
    },
    {
        imageUrl: 'https://daprintfactory.com/cdn/shop/files/music-cds-music-covers-print-1.png?v=1690954711',
        songName: 'As it was',
        artistName: 'Harry styles',
        time: '2:47',
    },
    {
        imageUrl: 'https://daprintfactory.com/cdn/shop/files/music-cds-music-covers-print-1.png?v=1690954711',
        songName: 'Sharks',
        artistName: 'Imagine Dragons',
        time: '3:00',
    },
];


type Props = {
    onPlay: () => void;
    header: string;
}

export default (props: Props) => {


    return (
        <div className={styles.MusicListCategory}>
            <div className={styles.nextPlay}>{props.header}</div>
            {musicData.map(category => (
                <div className={styles.MusicListId}>
                    <img className={styles.MusicListimageUrl} src={category.imageUrl} alt="imageUrl" />
                    <div className={styles.MusicListText}>
                        <div className={styles.MusicListNames}>
                            <div className={styles.songName}>{category.songName}</div>
                            <div className={styles.artistName}>{category.artistName}</div>
                        </div>
                        <span className={styles.MusicListTime}>{category.time}</span>
                    </div>
                </div>
            ))}

        </div>
    )
};
