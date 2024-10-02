'use client';

import styles from './MusicList.module.scss';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import {
    authorNameState,
    globalImageState,
    indexState,
    isPlayingState,
    musicGlobalState,
    musicId,
    musicNameState,
} from '@/app/state';
import axios from 'axios';
import MusicListItem from '@/app/Components/MusicListItem/MusicListItem';

interface MusicListItemType {
    id: number;
    title: string;
    coverImgUrl: string;
    audioUrl: string;
    artistName: string;
    songDuration: string;
}

const MusicList = () => {
    const [, setGlobalsrc] = useRecoilState(musicGlobalState);
    const [globalMusicId, setGlobalId] = useRecoilState(musicId);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const [, setActiveIdx] = useRecoilState(indexState);
    const [, setImage] = useRecoilState(globalImageState);
    const [, setArtist] = useRecoilState(musicNameState);
    const [, setTitle] = useRecoilState(authorNameState);
    const [musicList, setMusicList] = useState<MusicListItemType[]>([]);
    const [musicData, setMusicData] = useState<MusicListItemType[]>([]);
    const [musicUp, setMusicUp] = useState(false);

    useEffect(() => {
        const fetchMusicList = async () => {
            try {
                const token = document.cookie
                    .split('; ')
                    .find((row) => row.startsWith('token='))
                    ?.split('=')[1];
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
                    title: hit.name, // Assuming the API returns name for title
                    artistName: hit.artistName || 'Unknown Artist',
                    coverImgUrl: hit.photo?.url || '/default-cover.jpg', // Default fallback image
                    audioUrl: hit.url?.url || '', // Audio URL
                    songDuration: hit.duration || '0:00', // Duration fallback
                }));

                setMusicList(formattedHits);
                setMusicData(formattedHits); // Set both musicList and musicData
            } catch (error) {
                console.error('Error fetching music data:', error);
                alert('Error fetching music data');
            }
        };

        fetchMusicList();
    }, []);

    const handleClick = (
        item: {
            id: number;
            coverImgUrl?: string;
            title?: string;
            artistName?: string;
        },
        index: number,
    ) => {
        if (globalMusicId === item.id) {
            setIsPlaying(!isPlaying);
        } else {
            const imageSrc = musicList.map((item) => item.coverImgUrl);
            const allSrc = musicList.map((item) => ({
                audioUrl: item.audioUrl,
                id: item.id,
            }));

            const musicName = musicList.map((item) => item.title);
            const artistName = musicList.map((item) => item.artistName);

            setIsPlaying(true);
            setGlobalId(item.id);
            setGlobalsrc(allSrc);
            setActiveIdx(index);
            setImage(imageSrc);
            setArtist(artistName);
            setTitle(musicName);
        }
    };

    const musicUpFunc = () => {
        setMusicUp(!musicUp);
    };

    return (
        <div className={styles.musicList}>
            <div
                className={styles.musicListBackground}
                style={{
                    transform: musicUp ? 'translateY(0%)' : 'translateY(0%)',
                }}
            >
                <div
                    className={`${styles.imageContainer} ${
                        musicUp ? styles.rotateUp : ''
                    }`}
                    onClick={musicUpFunc}
                >
                    {musicUp ? (
                        <img src="/icons/downArrow.svg" alt="MusicDown" />
                    ) : (
                        <img src="/icons/topArrow.svg" alt="MusicUp" />
                    )}
                </div>
                <div className={styles.nameAndMusic}>
                    <p className={styles.nextContainer}>For You</p>
                    <div className={styles.musicListItem}>
                        {musicData
                            .slice(0, musicUp ? 6 : 0)
                            .map((item, index) => (
                                <MusicListItem
                                    id={item.id}
                                    key={item.id}
                                    image={item.coverImgUrl}
                                    songTitle={item.title}
                                    artistName={item.artistName}
                                    onClick={() => {
                                        handleClick(item, index);
                                    }}
                                    index={index}
                                />
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MusicList;
