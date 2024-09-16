'use client'
import React from 'react';
import styles from "./TrendHits.module.scss";
import MusicCard from '../MusicCard/MusicCard';
import { useRecoilState } from 'recoil';
import { globalMusicState } from '@/app/state';

type Props = {
    limit?: number;
    showLikeButton: boolean;
}

const TrendHits = (props: Props) => {
    const [globalId, setGlobalId] = useRecoilState(globalMusicState);
    const trendHitsData = [
        {
            id: 1,
            songName: 'Believer',
            artistName: 'Imagine Dragons',
            imageUrl: '/background/backImageFullScreeen.jpg',
        },
        {
            id: 2,
            songName: 'Believer',
            artistName: 'Imagine Dragons',
            imageUrl: '/background/backImageFullScreeen.jpg',
        },
        {
            id: 3,
            songName: 'Believer',
            artistName: 'Imagine Dragons',
            imageUrl: '/background/backImageFullScreeen.jpg',
        },
        {
            id: 4,
            songName: 'Believer',
            artistName: 'Imagine Dragons',
            imageUrl: '/background/backImageFullScreeen.jpg',
        },
        {
            id: 5,
            songName: 'Believer',
            artistName: 'Imagine Dragons',
            imageUrl: '/background/backImageFullScreeen.jpg',
        },
        {
            id: 6,
            songName: 'Believer',
            artistName: 'Imagine Dragons',
            imageUrl: '/background/backImageFullScreeen.jpg',
        },
        {
            id: 7,
            songName: 'Believer',
            artistName: 'Imagine Dragons',
            imageUrl: '/background/backImageFullScreeen.jpg',
        },
        {
            id: 8,
            songName: 'Believer',
            artistName: 'Imagine Dragons',
            imageUrl: '/background/backImageFullScreeen.jpg',
        },
    ];



    const trendHits = props.limit ? trendHitsData.slice(0, props.limit) : trendHitsData;

    const handleCardClick = (id: number) => {
        setGlobalId(id);
    };

    return (
        <div className={styles.trendHitsContainer}>
            {trendHits.map((trendHit) => (
                <MusicCard
                    key={trendHit.id}
                    imageUrl={trendHit.imageUrl}
                    songName={trendHit.songName}
                    artistName={trendHit.artistName}
                    trackIndex={trendHit.id}
                    showLikeButton={props.showLikeButton}
                    onClick={() => handleCardClick(trendHit.id)}
                    id={trendHit.id} />
            ))}
        </div>
    );
};

export default TrendHits;