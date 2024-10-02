'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MusicCard from '../../MusicCard/MusicCard';
import styles from './AlbumsById.module.scss';
import { useRecoilState } from 'recoil';
import {
    authorNameState,
    clickState,
    globalImageState,
    indexState,
    isPlayingState,
    musicGlobalState,
    musicId,
    musicNameState,
} from '@/app/state';
import { useParams } from 'next/navigation';
import useToggleMenu from '@/app/helpers/useToggleMenu';
import Link from 'next/link';

type MusicResponse = {
    artistName: string;
    musics: {
        url: any;
        id: number;
        name: string;
        artistName: string;
        photo: {
            id: number;
            url: string;
        };
    }[];
    file: {
        id: number;
        url: string;
    };
    title: string;
};

type MusicData = {
    id: number;
    name: string;
    artistName: string;
    photo: string;
    musicUrl: string;
};

interface TopHitsData {
    id: number;
    name: string;
    artistName: string;
    photoUrl: string;
    musicUrl: string;
}

const AlbumsById = () => {
    const [globalId, setGlobalId] = useRecoilState(musicId);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const { currentCardId, toggleMenu } = useToggleMenu();
    const [, setGlobalsrc] = useRecoilState(musicGlobalState);
    const [, setActiveIdx] = useRecoilState(indexState);
    const [, setImage] = useRecoilState(globalImageState);
    const [, setMusicName] = useRecoilState(musicNameState);
    const [, setAuthorName] = useRecoilState(authorNameState);
    const [albomsmusic, setAlbomsmusic] = useState<MusicData[]>([]);
    const [topHits, setTopHits] = useState<TopHitsData[]>([]);
    const [, setError] = useState<string | null>(null);
    const [click] = useRecoilState(clickState);
    const params = useParams();
    const [artistName, setArtistName] = useState<string | undefined>();
    const [title, setTitle] = useState<string | undefined>();
    const [albumCoverUrl, setAlbumCoverUrl] = useState<string | null>(null);

    useEffect(() => {
        const fetchAlbumMusic = async () => {
            try {
                const token = document.cookie
                    .split('; ')
                    .find((row) => row.startsWith('token='))
                    ?.split('=')[1];

                if (!token) {
                    throw new Error('No token found');
                }

                const response = await axios.get<MusicResponse>(
                    `https://vibetunes-backend.onrender.com/album/${params.id}`,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${token}`,
                        },
                    },
                );

                const albumData = response.data;
                console.log(albumData, 'albu');

                setArtistName(albumData.artistName);
                setTitle(albumData.title);

                const musicData = albumData.musics.map((music) => ({
                    id: music.id,
                    name: music.name,
                    artistName: music.artistName,
                    photo: music.photo?.url || '/default_music_image.svg',
                    musicUrl: music.url.url,
                }));
                setAlbomsmusic(musicData);

                const topHitsData = musicData.map((music) => ({
                    id: music.id,
                    name: music.name,
                    artistName: music.artistName,
                    photoUrl: music.photo,
                    musicUrl: music.musicUrl,
                }));
                console.log(topHitsData, 'topHitsData');

                setTopHits(topHitsData);

                if (musicData.length > 0) {
                    setAlbumCoverUrl(albumData.file.url);
                }
            } catch (error) {
                console.error('Error fetching album music data:', error);
                setError('Failed to fetch album music');
            }
        };

        fetchAlbumMusic();
    }, [click, params.id]);

    const handleClick = (
        item: {
            id: number;
            photo?: string;
            name?: string;
            artistName?: string;
            musicUrl?: string;
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
            const authorNames = topHits.map((item) => item.artistName);

            setIsPlaying(true);
            setGlobalId(item.id);
            setGlobalsrc(allSrc);
            setActiveIdx(index);
            setImage(imageSrc);
            setMusicName(musicName);
            setAuthorName(authorNames);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.headerNames}>
                <Link className={styles.paths} href="/albums">
                    Albums
                </Link>
                <img src="/arrowp.svg" alt="arrow" />
                <div className={styles.pageTitle}>{artistName}</div>
            </div>
            <div className={styles.pageDescripton}>
                <img
                    className={styles.img}
                    src={albumCoverUrl || '/default_album_image.svg'}
                    alt="Album Cover"
                />
                <span className={styles.pageTitle}>{title}</span>
                <span className={styles.artistName}>{artistName}</span>
            </div>
            <div className={styles.musicCards}>
                {albomsmusic.map((item, index) => (
                    <MusicCard
                        key={item.id}
                        onClick={() => handleClick(item, index)}
                        image={item.photo}
                        title={item.name}
                        teamName={item.artistName}
                        deleteOrLike={false}
                        id={item.id}
                        isPlaying={isPlaying && globalId === index}
                        index={index}
                        menuOpen={currentCardId === item.id}
                        toggleMenu={() => toggleMenu(item.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default AlbumsById;
