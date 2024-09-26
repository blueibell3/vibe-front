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
                            <div> + Create playlist</div>
                        </Link>
                        <div  onClick={handleClick}>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LikeButton;
