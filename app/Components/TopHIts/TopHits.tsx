'use client'
import { useRecoilState } from 'recoil';
import { globalMusicState } from '@/app/state';
import styles from './TopHits.module.scss';
import MusicCard from '../MusicCard/MusicCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

type Props = {
    limit?: number;
    showLikeButton: boolean;
}

interface TopHitsData {
    id: number;
    name: string;
    artistName: string;
    photoUrl: string;
    url: string;
}

const TopHits = (props: Props) => {
    const [globalId, setGlobalId] = useRecoilState(globalMusicState);
    const [topHits, setTopHits] = useState<TopHitsData[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTopHits = async () => {
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
                    photoUrl: hit.photo.url,  // Access the correct photo URL from response
                    url: hit.url,
                }));

                setTopHits(formattedHits);
                setError(null);
            } catch (error: any) {
                console.error('Error fetching top hits:', error);
                if (error.response) {
                    setError(`Server Error: ${error.response.data.message}`);
                } else if (error.request) {
                    setError('No response from the server.');
                } else {
                    setError(error.message);
                }
            }
        };

        fetchTopHits();
    }, []);

    const handleCardClick = (id: number) => {
        setGlobalId(id);
    };

    const limitedTopHits = props.limit ? topHits.slice(0, props.limit) : topHits;

    return (
        <div className={styles.container}>
            {error && <div className={styles.error}>{error}</div>}
            {limitedTopHits.map((hit, index) => (
                <MusicCard
                    key={index}
                    id={hit.id}
                    imageUrl={hit.photoUrl}
                    songName={hit.name}
                    artistName={hit.artistName}
                    trackIndex={index}
                    showLikeButton={props.showLikeButton}
                    onClick={() => handleCardClick(hit.id)}
                />
            ))}
        </div>
    );
};

export default TopHits;
