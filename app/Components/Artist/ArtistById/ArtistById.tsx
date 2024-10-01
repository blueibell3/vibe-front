'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MusicCard from "../../MusicCard/MusicCard";
import styles from './ArtistById.module.scss';
import { useRecoilState } from 'recoil';
import { clickState, globalMusicState } from '@/app/state';
import { useParams } from 'next/navigation';
import AlbumCard from '../../AlbumCard/AlbumCard';

type MusicResponse = {
    artistName: string;
    biography: string;
    musics: {
        id: number;
        name: string;
        artistName: string;
        photo: {
            url: string;
        };
        duration: string | null;
        title: string;
    }[];
    file: {
        url: string;
    };
    albums: {
        id: number;
        title: string;
        releaseDate: string;
        artistName: string;
        file: {
            url: string;
        };
    }[];
};

type MusicData = {
    id: number;
    name: string;
    artistName: string;
    photo: string;
    mp3: string;
    coverUrl: string;
    title: string;
    file: {
        url: string;
    };
};

type AlbumData = {
    id: number;
    title: string;
    releaseDate: string;
    artistName: string;
    coverUrl: string;
};

const ArtistById = () => {
    const [globalId, setGlobalId] = useRecoilState(globalMusicState);
    const [artistMusic, setArtistMusic] = useState<MusicData[]>([]);
    const [albums, setAlbums] = useState<AlbumData[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [click] = useRecoilState(clickState);
    const params = useParams();
    const [artistName, setArtistName] = useState<string | undefined>();
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
                });

                setArtistName(response.data.artistName);
                setBiography(response.data.biography);

                const artistData = response.data;

                const musicData = artistData.musics.map((music) => ({
                    id: music.id,
                    name: music.name,
                    artistName: music.artistName,
                    photo: music.photo?.url || '/default_music_image.svg',
                    mp3: artistData.file.url,
                    coverUrl: artistData.file.url,
                    title: music.title,
                    file: { url: artistData.file.url }
                }));
                
                setArtistMusic(musicData);

                const albumData = artistData.albums.map((album) => ({
                    id: album.id,
                    title: album.title,
                    releaseDate: album.releaseDate,
                    artistName: album.artistName,
                    coverUrl: album.file?.url || '/default_album_image.svg',
                }));
                setAlbums(albumData);

        
                if (artistData.file.url) {
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
        <div className={styles.container}>
            <div className={styles.pageTitle}>{artistName}</div>
            <div className={styles.pageDescripton}>
                <img
                    className={styles.img}
                    src={albumCoverUrl || '/default_album_image.svg'}
                />
                <span className={styles.pageTitle}>{artistName}</span>
                <span className={styles.descriptonText}>{biography}</span>
            </div>
            <div className={styles.musicCards}>
                {artistMusic.map((music) => (
                    <MusicCard
                        imageUrl={music.file.url}
                        songName={music.name}
                        artistName={music.artistName}
                        trackIndex={music.id}
                        showLikeButton={true}
                        key={music.id}
                        onClick={() => handleCardClick(music.id)}
                        id={music.id}
                    />
                ))}
            </div>
            <div className={styles.albumsPage}>
                <div className={styles.albumsText}>Albums</div>
                {albums.map((album) => (
                    <AlbumCard
                        key={album.id}
                        id={album.id}
                        imageUrl={album.coverUrl}
                        releaseDate={album.releaseDate}
                        songName={album.title}
                    />
                ))}
            </div>
        </div>
    );
};

export default ArtistById;
