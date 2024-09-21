import React, { useEffect, useState } from 'react';
import styles from "./Albums.module.scss";
import AlbumCard from '../AlbumCard/AlbumCard';
import axios from 'axios';

type Album = {
    id: number;
    url: string;
    songName?: string;
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
                const response = await axios.get(`https://vibetunes-backend.onrender.com/album`, {
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
                <AlbumCard
                    id={album.id}
                    imageUrl={album.url}
                    artistName={album.title}
                    releaseDate={album.releaseDate} />
            ))}
        </div>
    );
};

export default Albums;
