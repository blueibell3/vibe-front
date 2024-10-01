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

interface musicListitem {
    title: string;
    coverImgUrl: string;
    audioUrl: string;
    artistName: string;
    id: number;
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
    const [musicList, setMusicList] = useState<musicListitem[]>([]);
    useEffect(() => {
        axios
            .get('/musics/shuffle')
            .then((res) => {
                setMusicList(res.data);
            })
            .catch((err) => {
                alert(err);
            });
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
        if (globalMusicId === item.id) {
            setIsPlaying(!isPlaying);
        } else {
            const imageSrc = musicList.map((item) => item.coverImgUrl);
            const allSrc = musicList.map((item) => ({
                audioUrl: item.audioUrl,
                id: item.id,
            }));

            const musicName = musicList.map((item) => item.title);
            const title = musicList.map((item) => item.title);

            setIsPlaying(true);
            setGlobalId(item.id);
            setGlobalsrc(allSrc);
            setActiveIdx(index);
            setImage(imageSrc);
            setTitle(musicName);
            setArtist(title);
        }
    };

    const [musicUp, setMusicUp] = useState(false);

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
                        <img
                            src="/allFolders/PlayerControler/MusicDown.svg"
                            alt="MusicDown"
                        />
                    ) : (
                        <img
                            src="/allFolders/PlayerControler/MusicUp.svg"
                            alt="MusicUp"
                        />
                    )}
                </div>
                <div className={styles.nameAndMusic}>
                    <p className={styles.nextContainer}>For You</p>
                    <div className={styles.musicListItem}>
                        {musicList
                            .slice(0, musicUp ? 6 : 0)
                            .map((item, index) => (
                                <MusicListItem
                                    id={index}
                                    key={item.id}
                                    image={item.coverImgUrl}
                                    songTitle={item.title}
                                    artistName={item.artistName}
                                    songDuration={item.songDuration}
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
