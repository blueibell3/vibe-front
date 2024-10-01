'use client';
import { useRecoilState } from 'recoil';
import styles from './TopHits.module.scss';
import MusicCard from '../MusicCard/MusicCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { globalMusicState } from '@/app/state';  // Ensure you have the correct Recoil state imported

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
    const [globalId, setGlobalId] = useRecoilState(globalMusicState);
    const [topHits, setTopHits] = useState<TopHitsData[]>([]);
    const [error, setError] = useState<string | null>(null);

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
                    musicUrl: hit.url.url,  // Adjusted for the correct field
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

    // const handleClick = (
    //     item: {
    //         image?: string;
    //         title?: string;
    //         temeName?: string;
    //         id: number;
    //         src?: string;
    //     },
    //     index: number,
    // ) => {
    //     if (globalMusicId === item.id) {
    //         setIsPlaying(!isPlaying);
    //     } else {
    //         const imageSrc = topHits.map((item) => item.coverImgUrl);
    //         const allSrc = topHits.map((item) => ({
    //             audioUrl: item.audioUrl,
    //             id: item.id,
    //         }));

    //         const musicName = topHits.map((item) => item.title);
    //         const title = topHits.map((item) => item.title);

    //         setIsPlaying(true);
    //         setGlobalId(item.id);
    //         setGlobalsrc(allSrc);
    //         setActiveIdx(index);
    //         setImage(imageSrc);
    //         setTitle(musicName);
    //         setArtist(title);
    //     }
    // };
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
                    image={hit.photoUrl}           // Image URL of the song/album
                    title={hit.name}               // Song name
                    teamName={hit.artistName}       // Artist name
                    deleteOrLike={props.showLikeButton}  // Show like button if true
                    id={hit.id}                    // Track ID
                    isPlaying={false}              // You can manage play state with your logic
                    index={index}                  // Index of the song in the list
                    menuOpen={false}               // Manage menu open state if needed
                />
            ))}
        </div>
    );
};

export default TopHits;
