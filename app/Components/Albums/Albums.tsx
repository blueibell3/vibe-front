import React, { useEffect, useState } from 'react';
import styles from "./Albums.module.scss";
import AlbumCard from '../AlbumCard/AlbumCard';
import axios from 'axios';
import { cookies } from 'next/headers';

type Album = {
    id: number;
    imageUrl: string;
    songName: string;
    title: string;
    releaseDate: string;
};

type Props = {
    limit?: number;
};

const Albums = (props: Props) => {
    const [albumsData, setAlbumsData] = useState<Album[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const token = document.cookie
        .split('; ')
        .find((row) => row.startsWith('token='))
        ?.split('=')[1];

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const response = await axios.get(`https://vibe-backend-prrr.onrender.com/album`, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                });
                setAlbumsData(response.data); setLoading(false);
            } catch (err) {
                setError('Failed');
                setLoading(false);
            }
        };

        fetchAlbums();
    }, []);

    const albumCard = props.limit ? albumsData.slice(0, props.limit) : albumsData;

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className={styles.albumsContainer}>
            {albumCard.map(album => (
                <AlbumCard id={album.id} songName={album.songName} imageUrl={album.imageUrl} artistName={album.title} year={album.releaseDate} />
            ))}
        </div>
    );
};

export default Albums;
