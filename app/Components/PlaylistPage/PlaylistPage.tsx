'use client';
import { useEffect, useState } from 'react';
import AddButton from '../AddButton/AddButton';
import ListItem from '../ListItem/ListItem';
import styles from './PlaylistPage.module.scss';
import axios from 'axios';

type Playlist = {
    id: number;
    name: string;
    description?: string;
    lastName: string;
};

const PlaylistPage = () => {
    const [playlist, setPlaylist] = useState<Playlist[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchPlaylists = async () => {
        try {
            const token = document.cookie
                .split('; ')
                .find((row) => row.startsWith('token='))
                ?.split('=')[1];

            if (!token) {
                throw new Error('No token found');
            }

            const response = await axios.get('https://vibetunes-backend.onrender.com/playlist', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });

            setPlaylist(Array.isArray(response.data) ? response.data : [response.data]);
            setLoading(false);
        } catch (err) {
            console.error(err);
            setError('Failed to fetch playlists');
            setLoading(false);
        }
    };

    const addNewPlaylist = (newPlaylist: Playlist) => {
        setPlaylist((prevPlaylists) => [...prevPlaylists, newPlaylist]);
    };

    useEffect(() => {
        fetchPlaylists();
    }, []); 

    return (
        <div className={styles.playlistContainer}>
            <AddButton onPlaylistCreated={addNewPlaylist} />
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {!loading && !error && playlist.map((item) => (
                <ListItem
                    id={item.id}
                    key={item.id}
                    name={item.name}
                    isArtist={false}
                    link={`/playlist/${item.id}`}
                />
            ))}
        </div>
    );
};

export default PlaylistPage;
