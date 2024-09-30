'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { playlistState } from '@/app/state';
import MusicList from './MusicList';
import styles from '../MusicList/MusicList.module.scss';
import { Track } from '@/app/types/type';

const MusicListItems: React.FC = () => {
    const [playlist, setPlaylist] = useRecoilState<Track[]>(playlistState);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMusicList = async () => {
            try {
                const token = document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1];
                if (!token) throw new Error('No token found');

                const response = await axios.get('https://vibetunes-backend.onrender.com/music', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                const formattedPlaylist = response.data.map((track: any) => ({
                    id: track.id,
                    name: track.name,
                    artistName: track.artistName || 'Unknown Artist',
                    photo: {
                        url: track.photo.url,
                    },
                    url: track.url.url, // Assign the actual audio URL
                }));

                setPlaylist(formattedPlaylist);
                setError(null);
            } catch (error: any) {
                console.error('Error fetching music data:', error);
                if (error.response) {
                    setError(`Server Error: ${error.response.data.message}`);
                } else if (error.request) {
                    setError('No response from the server.');
                } else {
                    setError(error.message);
                }
            }
        };

        fetchMusicList();
    }, [setPlaylist]);

    return (
        <div className={styles.container}>
            {error && <div className={styles.errorMessage}>{error}</div>}

            <div className={styles.listWrap}>
                {playlist.map((track) => (
                    <MusicList
                        key={track.id}
                        imageUrl={track.photo.url}
                        songName={track.name}
                        artistName={track.artistName}
                        trackIndex={playlist.indexOf(track)}
                        trackUrl={track.url} 
                    />
                ))}
            </div>
        </div>
    );
};

export default MusicListItems;
