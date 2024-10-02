'use client'

import { useParams } from "next/navigation";

import styles from "./TopChartsById.module.scss";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TrendHits from "../../TrendHits/TrendHits";

type Music = {
    id: number;
    name: string;
    artistName: string;
};

const genreMap: { [key: number]: string } = {
    1: 'Techno',
    2: 'House',
    3: 'Rap',
    4: 'Rock',
};

const TopChartsById: React.FC = () => {
    const params = useParams();
    const [musicData, setMusicData] = useState<Music[]>([]);
    const [genreName, setGenreName] = useState<string>('');

    useEffect(() => {
        const genreId = Array.isArray(params.id) ? parseInt(params.id[0]) : parseInt(params.id);
        if (genreMap[genreId]) {
            setGenreName(genreMap[genreId]);
        }

        const fetchMusic = async () => {
            try {
                const token = document.cookie
                    .split('; ')
                    .find((row) => row.startsWith('token='))
                    ?.split('=')[1];

                if (!token) {
                    throw new Error('No token found');
                }

                const response = await axios.get(`https://vibetunes-backend.onrender.com/genres/${genreId}/musics`, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                });

                setMusicData(response.data);
            } catch (error) {
                console.error('Error fetching music data:', error);
            }
        };

        fetchMusic();
    }, [params.id]);

    return (
        <>
            <div className={styles.chartByIdContainer}>
                <div className={styles.hitsTitle}>Top charts</div>
                <div className={styles.trendHits}>
                    <TrendHits limit={16}  showLikeButton={true} />
                </div>
            </div>
        </>
    )
}


export default TopChartsById