'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MusicCard from "../../MusicCard/MusicCard";
import styles from './AlbumsById.module.scss';
import { useRecoilState } from 'recoil';
import { clickState, currentTrackIndexState, globalMusicState, playlistState, Track } from '@/app/state';
import { useParams } from 'next/navigation';



type MusicResponse = {
    title: string;
    artistName: string;
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

const AlbumsById = () => {
    const [, setGlobalId] = useRecoilState(globalMusicState);
    const [albomsmusic, setAlbomsmusic] = useState<MusicData[]>([]);
    const [, setPlaylist] = useRecoilState<Track[]>(playlistState);
    const [, setError] = useState<string | null>(null);
    const [, setIndex] = useRecoilState(currentTrackIndexState)
    const [click] = useRecoilState(clickState);
    const params = useParams();
    const [artistName, setArtistName] = useState<string | undefined>()
    const [title, setTitle] = useState<string | undefined>();
    console.log(albomsmusic, '')
    const [albumCoverUrl, setAlbumCoverUrl] = useState<string | null>(null);

    useEffect(() => {
        const fetchAlbumMusic = async () => {
            try {
                const token = document.cookie
                    .split('; ')
                    .find((row) => row.startsWith('token='))?.split('=')[1];

                if (!token) {
                    throw new Error('No token found');
                }

                const response = await axios.get<MusicResponse>(`https://vibetunes-backend.onrender.com/album/${params.id}`, {

                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                })


                setArtistName(response.data.artistName)
                setTitle(response.data.title)

                const albumData = response.data;


                const musicData = albumData.musics.map((music) => ({
                    id: music.id,
                    name: music.name,
                    artistName: music.artistName,
                    photo: music.photo?.url || '/default_music_image.svg',
                    mp3: albumData.file.url,
                    coverUrl: albumData.file.url,
                    title: albumData.title,
                }));
                // const playlistdata = albumData.musics.map
                setAlbomsmusic(musicData);
                // setPlaylist()


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

    const handleCardClick = (id: number, index: number) => {
        setGlobalId(id);
        setIndex(index)
    };
    return (
        <>
            <div className={styles.container}>

            <div className={styles.headerNames}>
                <a className={styles.paths} href="/albums">Albums</a>
                <img src="/arrowp.svg" />
                <div className={styles.pageTitle}>{artistName}</div>
            </div>

                <div className={styles.pageDescripton}>
                    <img className={styles.img} src={albumCoverUrl || '/default_album_image.svg'} />
                    <span className={styles.pageTitle}>{title}</span>
                    <span className={styles.artistName}>{artistName}</span>
                </div>
                <div className={styles.musicCards}>
                    {albomsmusic.map((music, index) => (
                        <MusicCard
                            key={index}
                            id={music.id}
                            imageUrl={music.coverUrl}
                            songName={music.name}
                            artistName={music.artistName}
                            trackIndex={index}
                            showLikeButton={true}
                            onClick={() => handleCardClick(music.id, index)}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}


export default AlbumsById
