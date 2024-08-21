import Link from "next/link";
import ListItem from "../ListItem/ListItem";
import styles from "./Artist.module.scss";

const ArtistPage = () => {
    const artistData = [
        {
            id: 1,
            text: 'Coldplay',
            imgSrc: '/artistimg.svg',
        },
        {
            id: 2,
            text: 'Sia',
            imgSrc: '/artistimg.svg',
        },
        {
            id: 3,
            text: 'Rihhana',
            imgSrc: '/artistimg.svg',
        },
        {
            id: 4,
            text: 'Rihhana',
            imgSrc: '/artistimg.svg',
        },
        {
            id: 5,
            text: 'The Beatles',
            imgSrc: '/artistimg.svg',
        },
        {
            id: 6,
            text: 'The Beatles',
            imgSrc: '/artistimg.svg',
        },
    ];

    return (

        <div className={styles.artistContainer}>
            {artistData.map(artistItem => (
                <ListItem
                    key={artistItem.id}
                    text={artistItem.text}
                    imgSrc={artistItem.imgSrc}
                    isArtist={true}
                    id={artistItem.id} />
            ))}
        </div>
    );
}

export default ArtistPage;