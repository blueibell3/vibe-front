'use client';
import { useRecoilState } from 'recoil';
import styles from './TopHits.module.scss';
import MusicCard from '../MusicCard/MusicCard';
import { useEffect, useState } from 'react';
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
import useToggleMenu from '@/app/helpers/useToggleMenu';

type Props = {
    limit?: number;
    showLikeButton: boolean;
};

interface TopHitsData {
    id: number;
    name: string;
    artistName: string;
    photoUrl: string;
    musicUrl: string;
}

const TopHits = (props: Props) => {
    const [globalId, setGlobalId] = useRecoilState(musicId);
    const [topHits, setTopHits] = useState<TopHitsData[]>([]);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const [, setGlobalsrc] = useRecoilState(musicGlobalState);
    const [, setActiveIdx] = useRecoilState(indexState);
    const [, setImage] = useRecoilState(globalImageState);
    const [, setMusicName] = useRecoilState(musicNameState);
    const [, setAuthorName] = useRecoilState(authorNameState);
    const { currentCardId, toggleMenu } = useToggleMenu();
    const [error, setError] = useState<string | null>(null);
    console.log(topHits, 'tophits');

    useEffect(() => {
        const fetchTopHits = async () => {
            try {
                const token = document.cookie
                    .split('; ')
                    .find((row) => row.startsWith('token='))
                    ?.split('=')[1];
                if (!token) throw new Error('No token found');

                const response = await axios.get(
                    'https://vibetunes-backend.onrender.com/music',
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
                    photoUrl: hit.photo.url,
                    musicUrl: hit.url.url,
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
    const limitedTopHits = props.limit
        ? topHits.slice(0, props.limit)
        : topHits;

    return (
        <div className={styles.container}>
            {error && <div className={styles.error}>{error}</div>}
            {limitedTopHits.map((hit, index) => (
                <MusicCard
                    key={hit.id}
                    onClick={() => handleClick(hit, index)}
                    image={hit.photoUrl}
                    title={hit.name}
                    teamName={hit.artistName}
                    deleteOrLike={false}
                    id={hit.id}
                    isPlaying={isPlaying && globalId === index}
                    index={index}
                    menuOpen={currentCardId === hit.id}
                    toggleMenu={() => toggleMenu(hit.id)}
                />
            ))}
        </div>
    );
};

export default TopHits;
