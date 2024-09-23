'use client'
import { globalMusicState } from "@/app/state";
import { useRecoilState } from "recoil";
import MusicCard from "../../MusicCard/MusicCard";
import TrendHitsPage from "../../TrendHits/TrendHits";
import styles from './AlbumsById.module.scss'

const AlbumsById = () => {
    const [globalId, setGlobalId] = useRecoilState(globalMusicState);

    const albomsmusic = [
        {
            id: 1,
            songName: 'Watermelon',
            artistName: 'kaxidze',
            imgUrl: '/jansulKaxize.jpg'
        },
        {
            id: 2,
            songName: 'Watermelon',
            artistName: 'kaxidze',
            imgUrl: '/jansulKaxize.jpg'
        },
        {
            id: 3,
            songName: 'Watermelon',
            artistName: 'kaxidze',
            imgUrl: '/jansulKaxize.jpg'
        },

        {
            id: 4,
            songName: 'Watermelon',
            artistName: 'kaxidze',
            imgUrl: '/jansulKaxize.jpg'
        },
        {
            id: 5,
            songName: 'Watermelon',
            artistName: 'kaxidze',
            imgUrl: '/jansulKaxize.jpg'
        },

        {
            id: 6,
            songName: 'Watermelon',
            artistName: 'kaxidze',
            imgUrl: '/jansulKaxize.jpg'
        },
    ]
    const handleCardClick = (id: number) => {
        setGlobalId(id);
    };
    return (
        <>
            <div className={styles.container}>
                <div className={styles.pageTitle}>All songs</div>
                <div className={styles.pageDescripton}>
                    <img className={styles.img} src='/albumsidimg.svg' />
                    <span className={styles.pageTitle}>Lovers</span>
                    <span className={styles.artistName}>Taylor Swift</span>
                </div>
                <div className={styles.musicCards}>
                    {albomsmusic.map((music) => (
                        <MusicCard
                            imageUrl={music.imgUrl}
                            songName={music.songName}
                            artistName={music.artistName}
                            trackIndex={2}
                            showLikeButton={true}
                            key={music.id}
                            onClick={() => handleCardClick(music.id)}
                            id={music.id}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}


export default AlbumsById