import ListItem from "../ListItem/ListItem";
import styles from "./TopArtists.module.scss";

const TopArtists = () => {
    const TopArtistsData = [
        {
            id: 1,
            text: 'Sia',
            imgSrc: 'sia.svg',

        },
        {
            id: 2,
            text: 'Beyonce',
            imgSrc: 'sia.svg',
        },
        {
            id: 3,
            text: 'Taylor Swift',
            imgSrc: 'sia.svg',
        },
        {
            id: 4,
            text: 'Ariana Grande',
            imgSrc: 'sia.svg',
        },
        {
            id: 5,
            text: 'The Beatles',
            imgSrc: 'sia.svg',
        },
    ];

    return (
        <div className={styles.topArtistContainer}>
            {TopArtistsData.map(TopArtistsItem => (
                <ListItem
                    key={TopArtistsItem.id}
                    text={TopArtistsItem.text}
                    href={`topartists/${TopArtistsItem.id}`}
                    imgSrc={TopArtistsItem.imgSrc}
                    isArtist={true}
                />

            ))}
        </div>
    );
}

export default TopArtists;