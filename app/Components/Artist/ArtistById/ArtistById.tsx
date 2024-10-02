'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MusicCard from '../../MusicCard/MusicCard';
import styles from './ArtistById.module.scss';
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
import AlbumCard from '../../AlbumCard/AlbumCard';
import useToggleMenu from '@/app/helpers/useToggleMenu';
import Link from 'next/link';

type MusicResponse = {
    firstName: string;
    lastName: string;
    artistName: string;
    biography: string;
    musics: {
        url: any;
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
    photoUrl: string;
    musicUrl: string;
};

type AlbumData = {
    id: number;
    title: string;
    releaseDate: string;
    artistName: string;
    coverUrl: string;
};
interface TopHitsData {
    id: number;
    name: string;
    artistName: string;
    photoUrl: string;
    musicUrl: string;
}

const ArtistById = () => {
    const [globalId, setGlobalId] = useRecoilState(musicId);
    const [topHits, setTopHits] = useState<TopHitsData[]>([]);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const [, setGlobalsrc] = useRecoilState(musicGlobalState);
    const [, setActiveIdx] = useRecoilState(indexState);
    const [, setImage] = useRecoilState(globalImageState);
    const [, setMusicName] = useRecoilState(musicNameState);
    const [, setAuthorName] = useRecoilState(authorNameState);
    const { currentCardId, toggleMenu } = useToggleMenu();
    const [artistMusic, setArtistMusic] = useState<MusicData[]>([]);
    const [albums, setAlbums] = useState<AlbumData[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [click] = useRecoilState(clickState);
    const params = useParams();
    const [albumCoverUrl, setAlbumCoverUrl] = useState<string | null>(null);
    const [biography, setBiography] = useState<string | undefined>();
    const [firstName, setFirstName] = useState<string | undefined>();
    const [lastName, setLastName] = useState<string | undefined>();

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
                    `https://vibetunes-backend.onrender.com/author/${params.id}`,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${token}`,
                        },
                    },
                );

                setFirstName(response.data.firstName);
                setBiography(response.data.biography);
                setLastName(response.data.lastName);

                const artistData = response.data;
                

                const musicData = artistData.musics.map((item) => ({
                    id: item.id,
                    name: item.name,
                    artistName: item.artistName || 'Unknown Artist',
                    photoUrl: item.photo.url,
                    musicUrl: item.url.url,
                }));
                setArtistMusic(musicData);
                setTopHits(musicData);
                

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

    return (
        <div className={styles.container}>
            <div className={styles.headerNames}>
                <Link className={styles.paths} href="/artist">
                    Artists
                </Link>
                <img src="/arrowp.svg" />
                <div className={styles.pageTitle}>
                    {firstName} {lastName}
                </div>
            </div>
            <div className={styles.pageDescripton}>
                <img
                    className={styles.img}
                    src={albumCoverUrl || '/default_album_image.svg'}
                />
                <div>
                    <span className={styles.pageTitle}>{firstName}</span>
                    <span className={styles.pageTitle}>{lastName}</span>
                </div>
                <span className={styles.descriptonText}>{biography}</span>
            </div>
            <div className={styles.musicCards}>
                {artistMusic.map((item, index) => (
                    <MusicCard
                        key={item.id}
                        onClick={() => handleClick(item, index)}
                        image={item.photoUrl}
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
