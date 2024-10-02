'use client';

import React, { useEffect, useState } from 'react';
import MusicListItem from '../MusicListItem/MusicListItem';
import NextPlay from './NextPlay/NextPlay';
import styles from './PlayerAndList.module.scss';
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

interface MusicListItemProps {
    id: number;
    title: string;
    coverImgUrl: string;
    audioUrl: string;
    artistName: string;
    songDuration?: string;
}

const PlayerAndList = () => {
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const [globalMusicId, setGlobalId] = useRecoilState(musicId);
    const [, setGlobalsrc] = useRecoilState(musicGlobalState);
    const [, setActiveIdx] = useRecoilState(indexState);
    const [, setImage] = useRecoilState(globalImageState);
    const [, setMusicName] = useRecoilState(musicNameState);
    const [, setAuthorName] = useRecoilState(authorNameState);
    const [musicList, setMusicList] = useState<MusicListItemProps[]>([]);
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
                    }
                );

                
                const formattedHits = response.data.map((hit: any) => ({
                    id: hit.id,
                    title: hit.name,
                    artistName: hit.artistName || 'Unknown Artist',
                    coverImgUrl: hit.photo.url,
                    audioUrl: hit.url.url, 
                    songDuration: '3:45', 
                }));

                setMusicList(formattedHits);
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
            id: number;
            coverImgUrl: string;
            title: string;
            artistName: string;
            audioUrl: string;
        },
        index: number
    ) => {
        if (globalMusicId === item.id) {
            setIsPlaying(!isPlaying);
        } else {
            const imageSrc = musicList.map((item) => item.coverImgUrl);
            const allSrc = musicList.map((item) => ({
                audioUrl: item.audioUrl,
                id: item.id,
            }));
            const musicName = musicList.map((item) => item.artistName);
            const title = musicList.map((item) => item.title);
            setIsPlaying(true);
            setGlobalId(item.id);
            setImage(imageSrc);
            setGlobalsrc(allSrc);
            setActiveIdx(index);
            setMusicName(musicName);
            setAuthorName(title);
        }
    };

    return (
        <div className={styles.playerAndListBox}>
            <div className={styles.playerAndList}>
                <div className={styles.playerAndListContainer}>
                    <NextPlay />
                    <div className={styles.listDataContainer}>
                        {musicList.map((item, index) => (
                            <MusicListItem
                                index={index}
                                key={item.id}
                                image={item.coverImgUrl}
                                songTitle={item.title}
                                artistName={item.artistName}
                                isPlaying={isPlaying && globalMusicId === item.id}
                                onClick={() => handleClick(item, index)}
                                id={item.id}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerAndList;