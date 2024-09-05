'use client'
import React from 'react';
import styles from "./TrendHits.module.scss";
import MusicCard from '../MusicCard/MusicCard';
import Id from '@/app/(authorised)/albums/[id]/page';

type Props = {
    limit?: number;
    showLikeButton: boolean;
}

const TrendHits = (props: Props) => {
    const trendHitsData = [
        {
            id: 1,
            songName: 'Feel it',
            artistName: 'Selena Gomez',
            imageUrl: '/trendhitsimg.svg',
        },
        {
            id: 2,
            songName: 'Feel it',
            artistName: 'Selena Gomez',
            imageUrl: '/trendhitsimg.svg',
        },
        {
            id: 3,
            songName: 'Slow down',
            artistName: 'Selena Gomez',
            imageUrl: '/trendhitsimg.svg',
        },
        {
            id: 4,
            songName: 'Feel it',
            artistName: 'Selena Gomez',
            imageUrl: '/trendhitsimg.svg',
        },
        {
            id: 5,
            songName: 'hbbh',
            artistName: 'Selena Gomez',
            imageUrl: '/trendhitsimg.svg',
        },
        {
            id: 6,
            songName: 'Feel it',
            artistName: 'Selena Gomez',
            imageUrl: '/trendhitsimg.svg',
        },
        {
            id: 7,
            songName: 'Feel it',
            artistName: 'Selena Gomez',
            imageUrl: '/trendhitsimg.svg',
        },
        {
            id: 8,
            songName: 'Feel it',
            artistName: 'Selena Gomez',
            imageUrl: '/trendhitsimg.svg',
        },
        {
            id: 9,
            songName: 'Made for me',
            artistName: 'Muni Long',
            imageUrl: '/trendhitsimg.svg',
        },
        {
            id: 10,
            songName: 'Feel it',
            artistName: 'Selena Gomez',
            imageUrl: '/trendhitsimg.svg',
        },
        {
            id: 11,
            songName: 'Slow down',
            artistName: 'Selena Gomez',
            imageUrl: '/trendhitsimg.svg',
        },
        {
            id: 12,
            songName: 'Lovin on me',
            artistName: 'Selena Gomez',
            imageUrl: '/trendhitsimg.svg',
        },
        {
            id: 13,
            songName: 'Feel it',
            artistName: 'Selena Gomez',
            imageUrl: '/trendhitsimg.svg',
        },
        {
            id: 14,
            songName: 'Lovin on me',
            artistName: 'Selena Gomez',
            imageUrl: '/trendhitsimg.svg',
        },
        {
            id: 15,
            songName: 'Feel it',
            artistName: 'Selena Gomez',
            imageUrl: '/trendhitsimg.svg',
        },
        {
            id: 16,
            songName: 'Lovin on me',
            artistName: 'Selena Gomez',
            imageUrl: '/trendhitsimg.svg',
        },
    ];

    const trendHits = props.limit ? trendHitsData.slice(0, props.limit) : trendHitsData;

    return (
        <div className={styles.trendHitsContainer}>
            {trendHits.map((trendHit, index) => (
                <MusicCard
                    key={trendHit.id}
                    imageUrl={trendHit.imageUrl}
                    songName={trendHit.songName}
                    artistName={trendHit.artistName}
                    trackIndex={index}
                    showLikeButton={props.showLikeButton}
                />
            ))}
        </div>
    );
}

export default TrendHits;
