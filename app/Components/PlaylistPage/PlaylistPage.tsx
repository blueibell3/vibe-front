'use client';
import { useEffect, useState } from "react";
import AddButton from "../AddButton/AddButton";
import ListItem from "../ListItem/ListItem";
import styles from "./PlaylistPage.module.scss";
import axios from "axios";

type playlist = {
    id: number
    name: string
    describtion?: string
}

const PlaylistPage = () => {
    const [playlistMusics, setPlaylistMusics] = useState<playlist[]>([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

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

                const response = await axios.get(`https://vibetunes-backend.onrender.com/playlist`, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                });

                setPlaylistMusics(Array.isArray(response.data) ? response.data : [response.data]);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError('Failed to fetch albums');
                setLoading(false);
            }
        };

        fetchAlbums();
    }, []);

    return (
        <div className={styles.playlistContainer}>
            <AddButton />
            {playlistMusics.map(playlistItem => (
                <ListItem
                    id={playlistItem.id}
                    key={playlistItem.id}
                    name={playlistItem.name}
                    // imgSrc={playlistItem.imgSrc}
                    isArtist={false}
                    link={`/playlist/${playlistItem.id}`}
                />
            ))}
        </div>
    );
}

export default PlaylistPage;
