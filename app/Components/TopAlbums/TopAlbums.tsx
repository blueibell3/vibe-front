'use client'
import React, { useEffect, useState } from 'react';
import styles from "./TopAlbums.module.scss";
import AlbumCard from '../AlbumCard/AlbumCard';
import axios from 'axios';

type Album = {
    id: number;
    title: string;
    releaseDate: string;
    file: {
        url: string;
    };
};

type Props = {
    limit?: number;
};

const TopAlbums = (props: Props) => {
    const [albumsData, setAlbumsData] = useState<Album[]>([]);

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const token = document.cookie
                    .split('; ')
                    .find((row) => row.startsWith('token='))
                    ?.split('=')[1];

                if (!token) {
                    throw new Error('No token found');
                }

                const response = await axios.get('https://vibetunes-backend.onrender.com/album', {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                });

                setAlbumsData(Array.isArray(response.data) ? response.data : [response.data]);
            } catch (error) {
                console.error('Error fetching album data:', error);
            }
        };

        fetchAlbums();
    }, []);

    const displayedItems = props.limit ? albumsData.slice(0, props.limit) : albumsData;

    return (
        <div className={styles.albumsContainer}>
            {displayedItems.map((album) => (
                <AlbumCard
                    key={album.id}
                    id={album.id}
                    imageUrl={album.file.url}
                    songName={album.title}
                    artistName={album.title}  
                    releaseDate={album.releaseDate}
                />
            ))}
        </div>
    );
};

export default TopAlbums;
