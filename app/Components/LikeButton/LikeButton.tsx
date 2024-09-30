'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './LikeButton.module.scss';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { currentTrackIndexState, globalMusicState } from '@/app/state';
import axios from 'axios';

type Playlist = {
    id: number;
    name: string;
    description?: string;
    lastName: string,
};

type Props = {
    id: number;
    trackIndex: number;
};

const LikeButton = (props: Props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [globalId] = useRecoilState(globalMusicState);
    const [index] = useRecoilState(currentTrackIndexState);
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

    const addTrackToPlaylist = async (playlistId: number, trackIndex: number) => {
        try {
            const token = document.cookie
                .split('; ')
                .find((row) => row.startsWith('token='))
                ?.split('=')[1];

            if (!token) {
                throw new Error('No token found');
            }

            await axios.patch(
                `https://vibetunes-backend.onrender.com/playlist/${playlistId}/add/${props.id}`,
                {
                    playlist: playlistId,
                    musicId: props.id,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            alert('Track added to playlist!');
        } catch (err) {
            console.error(err);
            alert('Failed to add track to playlist');
        }
    };

    useEffect(() => {
        fetchPlaylists();
    }, []);

    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={styles.container}>
            <button onClick={handleClick} className={styles.button}>
                <Image src="/icons/three dots.svg" alt="menu" width={24} height={24} />
            </button>
            {isMenuOpen && globalId === props.id && (
                <div className={styles.menu}>
                    <div className={styles.menuItem}>
                        <Link href="/playlist">
                            <div className={styles.create}>+ Create playlist</div>
                        </Link>
                        {loading && <div>Loading...</div>}
                        {error && <div>{error}</div>}
                        {!loading &&
                            !error &&
                            playlist.map((item) => (
                                <div
                                    key={item.id}
                                    className={styles.playlist}
                                    onClick={() => addTrackToPlaylist(item.id, props.trackIndex)}
                                >
                                    <span className={styles.playlistItem}>{item.name}</span>
                                </div>
                            ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LikeButton;
