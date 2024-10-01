'use client';
import React, { useEffect, useState } from 'react';
import styles from "./TrendHits.module.scss";
import { useRecoilState } from 'recoil';
import axios from 'axios';
import { musicId } from '@/app/state';
import MusicCard from '../MusicCard/MusicCard';

type Props = {
    limit?: number;
    showLikeButton: boolean;
}

interface tophits {
    id: number;
    name: string;
    artistName: string;
    photoUrl: string;
    musicUrl: string;
}

const TrendHits = (props: Props) => {
    const [globalId, setGlobalId] = useRecoilState(musicId);
    const [topHits, setTopHits] = useState<tophits[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTrendHits = async () => {
            try {
                const token = document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1];
                if (!token) throw new Error('No token found');

                const response = await axios.get('https://vibetunes-backend.onrender.com/music/top', {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                });

                const formattedHits = response.data.map((hit: any) => ({
                    id: hit.id,
                    name: hit.name,
                    artistName: hit.artistName || 'Unknown Artist',
                    photoUrl: hit.photo?.url || '',  // Accessing the correct photo URL
                    musicUrl: hit.url?.url || '',    // Accessing the correct music URL
                }));

                setTopHits(formattedHits);
                setError(null);
            } catch (error: any) {
                console.error('Error fetching trend hits data:', error);
                if (error.response) {
                    setError(`Server Error: ${error.response.data.message}`);
                } else if (error.request) {
                    setError('No response from the server.');
                } else {
                    setError(error.message);
                }
            }
        };

        fetchTrendHits();
    }, []);

    const trendHits = props.limit ? topHits.slice(0, props.limit) : topHits;

    const handleCardClick = (id: number) => {
        setGlobalId(id);
    };

    return (
        <div className={styles.trendHitsContainer}>
            {error && <div className={styles.error}>{error}</div>}
            {trendHits.map((trendHit, index) => (
                <MusicCard
                    key={trendHit.id}
                    onClick={() => handleCardClick(trendHit.id)}
                    image={trendHit.photoUrl}          // Image of the song/album
                    title={trendHit.name}              // Song name
                    teamName={trendHit.artistName}     // Artist name
                    deleteOrLike={props.showLikeButton} // Conditional render for like button
                    id={trendHit.id}                  // Track ID
                    isPlaying={false}                 // Placeholder for playing state (customize if needed)
                    index={index}                     // Index of the track in the list
                    menuOpen={false}                  // Placeholder for menu state (customize if needed)
                />
            ))}
        </div>
    );
};

export default TrendHits;
