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
    title: string;
    coverImgUrl: string;
    audioUrl: string;
    artistName: string;
    id: number;
    songDuration: string;
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

    useEffect(() => {
        axios.get('/musics/shuffle').then((res) => {
            setMusicList(res.data);
        });
    }, []);

    const handleClick = (
        item: {
            id: number;
            image?: string;
            title?: string;
            artist?: string;
            src?: string;
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
                                songDuration={item.songDuration}
                                isPlaying={
                                    isPlaying && globalMusicId === item.id
                                }
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
