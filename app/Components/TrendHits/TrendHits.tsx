import React from 'react';
import styles from "./TrendHits.module.scss"
import MusicCard from '../MusicCard/MusicCard';


const TrendHitsPage = () => {
    const trendHitsData = [
        {
            songName: 'Feel it',
            artistName: 'Selena Gomez',
            imageUrl: 'trendhitsimg.svg',
        },
        {
            songName: 'Feel it',
            artistName: 'Selena Gomez',
            imageUrl: 'trendhitsimg.svg',
        },
        {
            songName: 'Slow down',
            artistName: 'Selena Gomez',
            imageUrl: 'trendhitsimg.svg',
        },
        {
            songName: 'Feel it',
            artistName: 'Selena Gomez',
            imageUrl: 'trendhitsimg.svg',
        },
        {
            songName: '',
            artistName: 'Selena Gomez',
            imageUrl: 'trendhitsimg.svg',
        },
        {
            songName: 'Feel it',
            artistName: 'Selena Gomez',
            imageUrl: 'trendhitsimg.svg',
        },
        {
            songName: 'Feel it',
            artistName: 'Selena Gomez',
            imageUrl: 'trendhitsimg.svg',
        },
        {
            songName: 'Feel it',
            artistName: 'Selena Gomez',
            imageUrl: 'trendhitsimg.svg',
        },
        {
            songName: 'Made for me',
            artistName: 'Muni Long',
            imageUrl: 'trendhitsimg.svg',
        },
        {
            songName: 'Feel it',
            artistName: 'Selena Gomez',
            imageUrl: 'trendhitsimg.svg',
        },
        {
            songName: 'Slow down',
            artistName: 'Selena Gomez',
            imageUrl: 'trendhitsimg.svg',
        },
        {
            songName: 'Lovin on me',
            artistName: 'Selena Gomez',
            imageUrl: 'trendhitsimg.svg',
        },
        {
            songName: 'Feel it',
            artistName: 'Selena Gomez',
            imageUrl: 'trendhitsimg.svg',
        },
        {
            songName: 'Lovin on me',
            artistName: 'Selena Gomez',
            imageUrl: 'trendhitsimg.svg',
        },
        {
            songName: 'Feel it',
            artistName: 'Selena Gomez',
            imageUrl: 'trendhitsimg.svg',
        },
        {
            songName: 'Lovin on me',
            artistName: 'Selena Gomez',
            imageUrl: 'trendhitsimg.svg',
        },
    
    ];
    return (
        <>

            <div className={styles.trendHitsContainer}>
                {trendHitsData.map(trendHits => (
                    <MusicCard
                        imageUrl={trendHits.imageUrl}
                        songName={trendHits.songName}
                        artistName={trendHits.artistName}
                    />
                ))}
            </div>
        </>
    );
}

export default TrendHitsPage;