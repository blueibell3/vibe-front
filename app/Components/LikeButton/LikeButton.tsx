'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './LikeButton.module.scss';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { currentTrackIndexState, globalMusicState } from '@/app/state';
import axios from 'axios';
import Id from '@/app/(authorised)/albums/[id]/page';
import { spawn } from 'child_process';

type Playlist = {
    id: number;
    name: string;
    description?: string;
    lastName: string;
};

type Props = {
    id: number
    trackIndex: number
}

const LikeButton = (props: Props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [globalId] = useRecoilState(globalMusicState)
    const [index] = useRecoilState(currentTrackIndexState)
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
                <div className={styles.menu} >
                    <div className={styles.menuItem}>
                        <Link href='/playlist'>
                            <div className={styles.create}> + Create playlist</div>
                        </Link>
                        {loading && <div>Loading...</div>}
                        {error && <div>{error}</div>}
                        {!loading && !error && playlist.map((item) => (
                            <div className={styles.playlist}>
                                <span className={styles.playlistItem}>
                                    {item.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LikeButton;
