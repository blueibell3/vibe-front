'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MusicCard from "../../MusicCard/MusicCard";
import styles from './ArtistById.module.scss';
import { useRecoilState } from 'recoil';
import { clickState, globalMusicState } from '@/app/state';
import { useParams } from 'next/navigation';
import Albums from '../../Albums/Albums';




type MusicResponse = {
    title: string;
    artistName: string;
    biography: string;
    musics: {
        id: number;
        name: string;
        artistName: string;
        photo: {
            id: number;
            url: string;
        };
        duration: string | null;
        title: string;
    }[];
    file: {
        id: number;
        url: string;
    };
    id: number;
};

type MusicData = {
    id: number;
    name: string;
    artistName: string;
    photo: string;
    mp3: string;
    coverUrl: string;
    title: string;
};

const ArtistById = () => {
    const [globalId, setGlobalId] = useRecoilState(globalMusicState);
    const [artistMusic, setArtistMusic] = useState<MusicData[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [click] = useRecoilState(clickState);
    const params = useParams();
    const [artistName, setArtistName] = useState<string | undefined>()
    const [albumCoverUrl, setAlbumCoverUrl] = useState<string | null>(null);
    const [biography, setBiography] = useState<string | undefined>();


   
    useEffect(() => {
        const fetchAlbumMusic = async () => {
            try {
                const token = document.cookie
                    .split('; ')
                    .find((row) => row.startsWith('token='))?.split('=')[1];

                if (!token) {
                    throw new Error('No token found');
                }

                const response = await axios.get<MusicResponse>(`https://vibetunes-backend.onrender.com/author/${params.id}`, {
                        
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                })

                setArtistName(response.data.artistName)
                setBiography(response.data.biography)

                const artistData = response.data;
                console.log(artistData, 'artistid wamoighooooooh');
                


                const musicData = artistData.musics.map((music) => ({
                    id: music.id,
                    name: music.name,
                    artistName: music.artistName,
                    photo: music.photo?.url || '/default_music_image.svg',
                    mp3: artistData.file.url,
                    coverUrl: artistData.file.url,
                    title: artistData.title,
                }));

                setArtistMusic(musicData);
                
                if (musicData.length > 0) {
                    setAlbumCoverUrl(artistData.file.url);
                }
            } catch (error) {
                console.error('Error fetching album music data:', error);
                setError('Failed to fetch album music');
            }
        };

        fetchAlbumMusic();
    }, [click, params.id]);
    const handleCardClick = (id: number) => {
        setGlobalId(id);
    };
    return (
        <>
            <div className={styles.container}>
                <div className={styles.pageTitle}>{artistName}</div>
                <div className={styles.pageDescripton}>
                    <img className={styles.img}  src={albumCoverUrl || '/default_album_image.svg'} />
                    <span className={styles.pageTitle}>{artistName}</span>
                    <span className={styles.descriptonText}>{biography} </span>
                </div>
                <div className={styles.musicCards}>
                    {artistMusic.map((music) => (
                        <MusicCard
                            imageUrl={music.coverUrl}
                            songName={music.name}
                            artistName={music.artistName}
                            trackIndex={2}
                            showLikeButton={true}
                            key={music.id}
                            onClick={() => handleCardClick(music.id)}
                            id={music.id} />
                    ))}
                </div>
                <div className={styles.albumsPage}>
                    <div className={styles.albumsText}>Albums</div>
                    <Albums limit={4} />
                </div>
            </div>
        </>
    );
};

export default ArtistById


