import ListItem from "../ListItem/ListItem";
import styles from "./ArtistPage.module.scss";

const ArtistPage = () => {
    const artistData = [
        {
            id: 1,
            text: 'Coldplay',
            imgSrc: 'artistimg.svg',
        },
        {
            id: 2,
            text: 'Sia',
            imgSrc: 'artistimg.svg',
        },
        {
            id: 3,
            text: 'Rihhana',
            imgSrc: 'artistimg.svg',
        },
        {
            id: 4,
            text: 'Rihhana',
            imgSrc: 'artistimg.svg',
        },
        {
            id: 5,
            text: 'The Beatles',
            imgSrc: 'artistimg.svg',
        },
        {
            id: 5,
            text: 'The Beatles',
            imgSrc: 'artistimg.svg',
        },
    ];

    return (
        <div className={styles.artistContainer}>
            {artistData.map(artistItem => (
                <ListItem
                key={artistItem.id}
                text={artistItem.text}
                href={`albums/${artistItem.id}`}
                imgSrc={artistItem.imgSrc}
                isArtist={true}
                     />

            ))}
        </div>
    );
}

export default ArtistPage;