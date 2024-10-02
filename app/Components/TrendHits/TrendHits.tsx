'use client';
import React, { useEffect, useState } from 'react';
import styles from './TrendHits.module.scss';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import {
    authorNameState,
    globalImageState,
    indexState,
    isPlayingState,
    musicGlobalState,
    musicId,
    musicNameState,
} from '@/app/state';
import MusicCard from '../MusicCard/MusicCard';
import useToggleMenu from '@/app/helpers/useToggleMenu';

type Props = {
    limit?: number;
    showLikeButton: boolean;
};

interface tophits {
    id: number;
    name: string;
    artistName: string;
    photoUrl: string;
    musicUrl: string;
}

const TrendHits = (props: Props) => {
    const [globalId, setGlobalId] = useRecoilState(musicId);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const [, setGlobalsrc] = useRecoilState(musicGlobalState);
    const [, setActiveIdx] = useRecoilState(indexState);
    const [, setImage] = useRecoilState(globalImageState);
    const [, setMusicName] = useRecoilState(musicNameState);
    const [, setAuthorName] = useRecoilState(authorNameState);
    const { currentCardId, toggleMenu } = useToggleMenu();
    const [topHits, setTopHits] = useState<tophits[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTrendHits = async () => {
            try {
                const token = document.cookie
                    .split('; ')
                    .find((row) => row.startsWith('token='))
                    ?.split('=')[1];
                if (!token) throw new Error('No token found');

                const response = await axios.get('https://vibetunes-backend.onrender.com/music/shuffle',
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${token}`,
                        },
                    },
                );

                const formattedHits = response.data.map((hit: any) => ({
                    id: hit.id,
                    name: hit.name,
                    artistName: hit.artistName || 'Unknown Artist',
                    photoUrl: hit.photo?.url || '',
                    musicUrl: hit.url?.url || '',
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
    const handleClick = (
        item: {
            image?: string;
            title?: string;
            temeName?: string;
            id: number;
            src?: string;
        },
        index: number,
    ) => {
        if (globalId === item.id) {
            setIsPlaying(!isPlaying);
        } else {
            const imageSrc = topHits.map((item) => item.photoUrl);
            const allSrc = topHits.map((item) => ({
                audioUrl: item.musicUrl,
                id: item.id,
            }));

            const musicName = topHits.map((item) => item.name);
            const title = topHits.map((item) => item.artistName);

            setIsPlaying(true);
            setGlobalId(item.id);
            setGlobalsrc(allSrc);
            setActiveIdx(index);
            setImage(imageSrc);
            setMusicName(musicName);
            setAuthorName(title);
        }
    };

    return (
        <div className={styles.trendHitsContainer}>
            {error && <div className={styles.error}>{error}</div>}
            {trendHits.map((trendHit, index) => (
                <MusicCard
                    key={trendHit.id}
                    onClick={() => handleClick(trendHit, index)}
                    image={trendHit.photoUrl}
                    title={trendHit.name}
                    teamName={trendHit.artistName}
                    deleteOrLike={false}
                    id={trendHit.id}
                    isPlaying={isPlaying && globalId === index}
                    index={index}
                    menuOpen={currentCardId === trendHit.id}
                    toggleMenu={() => toggleMenu(trendHit.id)}
                />
            ))}
        </div>
    );
};

export default TrendHits;
