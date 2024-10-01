'use client';
import { useEffect, useState } from 'react';
import AddButton from '../AddButton/AddButton';
import ListItem from '../ListItem/ListItem';
import styles from './PlaylistPage.module.scss';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { clickState } from '@/app/state';

type Playlist = {
    id: number;
    description?: string;
    musics?: {
        id: number;
        name: string;
        artistName: string;
        photo?: {
            url: string;
        };
    }[];
    name: string;
};

const PlaylistPage = () => {
    const [playlist, setPlaylist] = useState<Playlist[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [click] = useRecoilState(clickState);

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
    }, [click]);

    const getPlaylistImage = (item: Playlist) => {
        const firstMusic = item.musics?.[0];
        return firstMusic?.photo?.url || '/defaultImage.jpg';
    };

    return (
        <div className={styles.playlistContainer}>
            <AddButton onPlaylistCreated={addNewPlaylist} />
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {!loading && !error && playlist.map((item) => {
                const firstMusic = item.musics?.[0];
                return (
                    <ListItem
                        id={item.id}
                        key={item.id}
                        name={item.name}
                        isArtist={false}
                        link={`/playlist/${item.id}`}
                        showIcon={true}
                        imgSrc={getPlaylistImage(item)}
                    />
                );
            })}
        </div>
    );
};

export default PlaylistPage;
