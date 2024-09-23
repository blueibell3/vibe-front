'use client'
import { useRecoilState } from 'recoil';
import { globalMusicState } from '@/app/state';
import styles from './TopHits.module.scss'
import MusicCard from '../MusicCard/MusicCard';

type Props = {
    limit?: number;
    showLikeButton: boolean;

}

const TopHits = (props: Props) => {
    const [globalId, setGlobalId] = useRecoilState(globalMusicState);
    const topHItsData = [
        {
            id: 1,
            songName: 'Believer',
            artistName: 'Imagine Dragons',
            imageUrl: '/background/backImageFullScreeen.jpg',
        },
        {
            id: 2,
            songName: 'Believer',
            artistName: 'Imagine Dragons',
            imageUrl: '/background/backImageFullScreeen.jpg',
        },
        {
            id: 3,
            songName: 'Believer',
            artistName: 'Imagine Dragons',
            imageUrl: '/background/backImageFullScreeen.jpg',
        },
        {
            id: 4,
            songName: 'Believer',
            artistName: 'Imagine Dragons',
            imageUrl: '/background/backImageFullScreeen.jpg',
        },
        {
            id: 5,
            songName: 'Believer',
            artistName: 'Imagine Dragons',
            imageUrl: '/background/backImageFullScreeen.jpg',
        },
        {
            id: 6,
            songName: 'Believer',
            artistName: 'Imagine Dragons',
            imageUrl: '/background/backImageFullScreeen.jpg',
        },
        {
            id: 7,
            songName: 'Believer',
            artistName: 'Imagine Dragons',
            imageUrl: '/background/backImageFullScreeen.jpg',
        },
        {
            id: 8,
            songName: 'Believer',
            artistName: 'Imagine Dragons',
            imageUrl: '/background/backImageFullScreeen.jpg',
        },
    ];

    const topdHits = props.limit ? topHItsData.slice(0, props.limit) : topHItsData;

    const handleCardClick = (id: number) => {
        setGlobalId(id);
    };

    return (
        <div className={styles.conteiner}>
            {topdHits.map((trendHit) => (
                <MusicCard
                    key={trendHit.id}
                    imageUrl={trendHit.imageUrl}
                    songName={trendHit.songName}
                    artistName={trendHit.artistName}
                    trackIndex={trendHit.id}
                    showLikeButton={props.showLikeButton}
                    onClick={() => handleCardClick(trendHit.id)}
                    id={trendHit.id} />
            ))}
        </div>
    )
}

export default TopHits