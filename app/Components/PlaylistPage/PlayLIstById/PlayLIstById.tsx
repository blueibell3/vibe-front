'use client';
import {
    authorNameState,
    clickState,
    globalImageState,
    indexState,
    isPlayingState,
    musicGlobalState,
    musicId,
    musicNameState,
} from '@/app/state';
import { useRecoilState } from 'recoil';
import MusicCard from '../../MusicCard/MusicCard';
import styles from './PlayLIstById.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import useToggleMenu from '@/app/helpers/useToggleMenu';

interface TopHitsData {
    id: number;
    name: string;
    artistName: string;
    photoUrl: string; 
    musicUrl: string; 
}

const PlayLIstById = () => {
    const [globalId, setGlobalId] = useRecoilState(musicId);
    const [topHits, setTopHits] = useState<TopHitsData[]>([]);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const [, setGlobalsrc] = useRecoilState(musicGlobalState);
    const [, setActiveIdx] = useRecoilState(indexState);
    const [, setImage] = useRecoilState(globalImageState);
    const [, setMusicName] = useRecoilState(musicNameState);
    const [, setAuthorName] = useRecoilState(authorNameState);
    const { currentCardId, toggleMenu } = useToggleMenu();
    const [musicData, setMusicData] = useState<any[]>([]);
    const [playlistName, setPlaylistName] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const params = useParams();
    const [click] = useRecoilState(clickState);

    useEffect(() => {
        const fetchPlaylist = async () => {
            try {
                const token = document.cookie
                    .split('; ')
                    .find((row) => row.startsWith('token='))
                    ?.split('=')[1];
                if (!token) throw new Error('No token found');

                const response = await axios.get(
                    `https://vibetunes-backend.onrender.com/playlist/${params.id}`,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${token}`,
                        },
                    },
                );
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

        const formattedHits = musicData.map((item) => ({
            id: item.id,
            name: item.name,
            artistName: item.artistName || 'Unknown Artist',
            photoUrl: item.photo.url,
            musicUrl: item.url.url,
        }));

        setTopHits(formattedHits);
        fetchPlaylist();
    }, [params.id, click, musicData]);

    const handleClick = (
        item: {
            image?: string;
            title?: string;
            temeName?: string;
            id: number;
            src?: string;
        },
        index: number,
    ) => {
        if (globalId === item.id) {
            setIsPlaying(!isPlaying);
        } else {
            const imageSrc = topHits.map((item) => item.photoUrl);
            const allSrc = topHits.map((item) => ({
                audioUrl: item.musicUrl,
                id: item.id,
            }));

            const musicName = topHits.map((item) => item.name);
            const title = topHits.map((item) => item.artistName);

            setIsPlaying(true);
            setGlobalId(item.id);
            setGlobalsrc(allSrc);
            setActiveIdx(index);
            setImage(imageSrc);
            setMusicName(musicName);
            setAuthorName(title);
        }
    };

    return (
        <div className={styles.wrap}>
            <div className={styles.headerNames}>
                <Link className={styles.paths} href="/playlist">
                    Playlists
                </Link>
                <img src="/arrowp.svg" />
                <div className={styles.pageTitle}>{playlistName}</div>
            </div>

            <div className={styles.everyDay}>
                {musicData.length > 0 && (
                    <img
                        src={musicData[0]?.photo?.url || '/whiteLogo.png'}
                        alt={playlistName}
                    />
                )}
                <span>{playlistName}</span>
            </div>
            <div className={styles.musicData}>
                {error ? (
                    <p>{error}</p>
                ) : musicData.length > 0 ? (
                    topHits.map((item, index) => (
                        <MusicCard
                            key={item.id}
                            onClick={() => handleClick(item, index)}
                            image={item.photoUrl}
                            title={item.name}
                            teamName={item.artistName}
                            deleteOrLike={true}
                            id={item.id}
                            isPlaying={isPlaying && globalId === index}
                            index={index}
                            menuOpen={currentCardId === item.id}
                            toggleMenu={() => toggleMenu(item.id)}
                        />
                    ))
                ) : (
                    <p>No music available</p>
                )}
            </div>
        </div>
    );
};

export default PlayLIstById;
