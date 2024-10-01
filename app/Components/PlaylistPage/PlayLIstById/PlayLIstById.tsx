'use client'
import { clickState, globalMusicState } from '@/app/state';
import { useRecoilState } from 'recoil';
import MusicCard from '../../MusicCard/MusicCard';
import styles from './PlayLIstById.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';

const PlayLIstById = () => {
    const [, setGlobalId] = useRecoilState(globalMusicState);
    const [musicData, setMusicData] = useState<any[]>([]);
    const [playlistName, setPlaylistName] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const params = useParams();
    const [click] = useRecoilState(clickState)

    useEffect(() => {
        const fetchPlaylist = async () => {
            try {
                const token = document.cookie
                    .split('; ')
                    .find(row => row.startsWith('token='))
                    ?.split('=')[1];
                if (!token) throw new Error('No token found');

                const response = await axios.get(`https://vibetunes-backend.onrender.com/playlist/${params.id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.data) {
                    setMusicData(response.data.musics);
                    setPlaylistName(response.data.name);
                } else {
                    setError('No music found in the playlist.');
                }
            } catch (error) {
                console.error('Error fetching playlist data:', error);
                setError('Error fetching playlist.');
            }
        };

        fetchPlaylist();
    }, [params.id, click]);

    const handleCardClick = (id: number) => {
        setGlobalId(id);
    };

    return (
        <div className={styles.wrap}>

            <div className={styles.headerNames}>
                <a className={styles.paths} href="/playlist">Playlists</a>
                <img src="/arrowp.svg" />
                <div className={styles.pageTitle}>{playlistName}</div>
            </div>

            <div className={styles.everyDay}>
                {musicData.length > 0 && (
                    <img src={musicData[0]?.photo?.url || '/defaultImage.jpg'} alt={playlistName} />
                )}
                <span>{playlistName}</span>
            </div>
            <div className={styles.musicData}>
                {error ? (
                    <p>{error}</p>
                ) : (
                    musicData.length > 0 ? (
                        musicData.map((music: any) => (
                            <MusicCard
                                key={music.id}
                                imageUrl={music.photo?.url || '/defaultImage.jpg'}
                                songName={music.name}
                                artistName={music.artistName}
                                trackIndex={music.id}
                                showLikeButton={false}
                                onClick={() => handleCardClick(music.id)}
                                id={music.id}
                            />
                        ))
                    ) : (
                        <p>No music available</p>
                    )
                )}
            </div>
        </div>
    );
};

export default PlayLIstById;
