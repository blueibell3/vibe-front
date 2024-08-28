'use client'
import React from 'react';
import styles from "./TrendHits.module.scss"
import MusicCard from '../MusicCard/MusicCard';
import { playlistState, currentTrackIndexState } from '@/app/state';
import { useRecoilValue } from "recoil";

type Props = {
    limit?: number;
    isHomePage: boolean
    showLikeButton: boolean;
}

const TrendHits = (props: Props) => {


    const trendHitsData = [
        {
            songName: 'Feel it',
            artistName: 'Selena Gomez',
            imageUrl: '/trendhitsimg.svg',
        },
        {
            songName: 'Feel it',
            artistName: 'Selena Gomez',
            imageUrl: '/trendhitsimg.svg',
        },
        {
            songName: 'Slow down',
            artistName: 'Selena Gomez',
            imageUrl: '/trendhitsimg.svg',
        },
        {
            songName: 'Feel it',
            artistName: 'Selena Gomez',
            imageUrl: '/trendhitsimg.svg',
        },
        {
            songName: 'hbbh',
            artistName: 'Selena Gomez',
            imageUrl: '/trendhitsimg.svg',
        },
        {
            songName: 'Feel it',
            artistName: 'Selena Gomez',
            imageUrl: '/trendhitsimg.svg',
        },
        {
            songName: 'Feel it',
            artistName: 'Selena Gomez',
            imageUrl: '/trendhitsimg.svg',
        },
        {
            songName: 'Feel it',
            artistName: 'Selena Gomez',
            imageUrl: '/trendhitsimg.svg',
        },
        {
            songName: 'Made for me',
            artistName: 'Muni Long',
            imageUrl: '/trendhitsimg.svg',
        },
        {
            songName: 'Feel it',
            artistName: 'Selena Gomez',
            imageUrl: '/trendhitsimg.svg',
        },
        {
            songName: 'Slow down',
            artistName: 'Selena Gomez',
            imageUrl: '/trendhitsimg.svg',
        },
        {
            songName: 'Lovin on me',
            artistName: 'Selena Gomez',
            imageUrl: '/trendhitsimg.svg',
        },
        {
            songName: 'Feel it',
            artistName: 'Selena Gomez',
            imageUrl: '/trendhitsimg.svg',
        },
        {
            songName: 'Lovin on me',
            artistName: 'Selena Gomez',
            imageUrl: '/trendhitsimg.svg',
        },
        {
            songName: 'Feel it',
            artistName: 'Selena Gomez',
            imageUrl: '/trendhitsimg.svg',
        },
        {
            songName: 'Lovin on me',
            artistName: 'Selena Gomez',
            imageUrl: '/trendhitsimg.svg',
        },

    ];
    const playlist = useRecoilValue(playlistState);
    const currentTrackIndex = useRecoilValue(currentTrackIndexState);
    const playList = props.isHomePage ? styles.trendHitsContainer : styles.playList;


    const trendHits = props.limit ? trendHitsData.slice(0, props.limit) : trendHitsData;
    return (
        <>

            <div className={`${styles.trendHitsContainer} ${playList}`}>
                {trendHits.map(trendHits => (
                    <MusicCard
                        imageUrl={trendHits.imageUrl}
                        songName={trendHits.songName}
                        artistName={trendHits.artistName}
                        trackIndex={0}
                        showLikeButton={props.showLikeButton} />

                ))}
            </div>
        </>
    );
}

export default TrendHits;