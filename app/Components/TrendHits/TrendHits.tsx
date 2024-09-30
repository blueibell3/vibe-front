'use client'
import React, { useEffect, useState } from 'react';
import styles from "./TrendHits.module.scss";
import MusicCard from '../MusicCard/MusicCard';
import { useRecoilState } from 'recoil';
import { globalMusicState } from '@/app/state';
import axios from 'axios';

type Props = {
    limit?: number;
    showLikeButton: boolean;
}
interface tophits {
    music_artistName: string,
    music_id: number,
    music_name: string,
    photo_url: string
}

const TrendHits = (props: Props) => {
    const [globalId, setGlobalId] = useRecoilState(globalMusicState);
    const [topHits,setTopHits] = useState<tophits[]>([])
    
    
    useEffect(() => {
        const token = document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1];
        axios.get('https://vibetunes-backend.onrender.com/music/top',{
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        }).then((res) =>{
            setTopHits(res.data)
        })
    },[])


    const trendHits = props.limit ? topHits.slice(0, props.limit) : topHits;

    const handleCardClick = (id: number) => {
        setGlobalId(id);
    };

    return (
        <div className={styles.trendHitsContainer}>
            {trendHits.map((trendHit) => (
                <MusicCard
                    key={trendHit.music_id}
                    imageUrl={trendHit.photo_url}
                    songName={trendHit.music_name}
                    artistName={trendHit.music_artistName}
                    trackIndex={trendHit.music_id}
                    showLikeButton={props.showLikeButton}
                    onClick={() => handleCardClick(trendHit.music_id)}
                    id={trendHit.music_id} />
            ))}
        </div>
    );
};

export default TrendHits;