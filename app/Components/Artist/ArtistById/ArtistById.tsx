'use client'
import Albums from "../../Albums/Albums";
import MusicCard from "../../MusicCard/MusicCard";
import styles from "./ArtistById.module.scss";
import { globalMusicState } from '@/app/state';
import { useRecoilState } from 'recoil';

const ArtistById = () => {
    const [globalId, setGlobalId] = useRecoilState(globalMusicState);

    const artistMusic = [
        {
            id: 1,
            songName: 'Help me',
            artistName: 'Katana',
            imgUrl: '/katana.jpg'
        },
        {
            id: 2,
            songName: 'Help me',
            artistName: 'Katana',
            imgUrl: '/katana.jpg'
        },
        {
            id: 3,
            songName: 'Help me',
            artistName: 'Katana',
            imgUrl: '/katana.jpg'
        },

        {
            id: 4,
            songName: 'Help me',
            artistName: 'Katana',
            imgUrl: '/katana.jpg'
        },
        {
            id: 5,
            songName: 'Help me',
            artistName: 'Katana',
            imgUrl: '/katana.jpg'
        },

        {
            id: 6,
            songName: 'Help me',
            artistName: 'Katana',
            imgUrl: '/katana.jpg'
        },
    ]
    const handleCardClick = (id: number) => {
        setGlobalId(id);
    };
    return (
        <>
            <div className={styles.container}>
                <div className={styles.pageTitle}>Coldplay</div>
                <div className={styles.pageDescripton}>
                    <img className={styles.img} src='/artistidimg.svg' alt="Artist Coldplay" />
                    <span className={styles.pageTitle}>Coldplay</span>
                    <span className={styles.descriptonText}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste porro delectus totam rem unde ipsam nihil explicabo quidem facilis provident ducimus temporibus deleniti mollitia beatae pariatur adipisci placeat, atque animi?
                    </span>
                    <span className={styles.descriptonText}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non reiciendis recusandae harum dicta voluptas possimus laboriosam nesciunt ut nam, iste vero fuga voluptates pariatur! Minima animi excepturi dolorem nisi aperiam!
                    </span>
                </div>
                <div className={styles.musicCards}>
                    {artistMusic.map((music) => (
                        <MusicCard
                            imageUrl={music.imgUrl}
                            songName={music.songName}
                            artistName={music.artistName}
                            trackIndex={1}
                            showLikeButton={true}
                            key={music.id}
                            onClick={() => handleCardClick(music.id)}
                            id={music.id} />
                    ))}
                </div>
                <div className={styles.albumsPage}>
                    <div className={styles.albumsText}>Albums</div>
                    <Albums limit={4} />
                </div>
            </div>
        </>
    );
};

export default ArtistById


