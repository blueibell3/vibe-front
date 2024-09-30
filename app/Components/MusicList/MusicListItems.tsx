'use client';
import styles from './MusicList.module.scss'
import { useRecoilState, useRecoilValue } from "recoil";
import MusicList from "./MusicList"
import { playlistState, Track } from '@/app/state';
import axios from 'axios';
import { useEffect, useState } from 'react';


const MusicListItems = () => {
    const [playlist, setPlaylist] = useRecoilState<Track[]>(playlistState);
    const [error, setError] = useState<string | null>(null);
    console.log(playlist);
    
    useEffect(() => {
        const fetchMusicList = async () => {
            try {
                const token = document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1];
                if (!token) throw new Error('No token found');

                const response = await axios.get('https://vibetunes-backend.onrender.com/music', {
                    headers: {
                        'Content-Type': 'application/json',
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
                    url: track.url.url,
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
            <span > Next Play</span>
            <div className={styles.listWrap}>
                {playlist.map((track, index) => (
                    <MusicList
                        id={track.id}
                        key={index}
                        imageUrl={track.photo.url}
                        songName={track.name}
                        artistName={track.artistName}
                        trackIndex={index}
                       
                    />
                ))}
            </div>
        </div >

    )
}

export default MusicListItems