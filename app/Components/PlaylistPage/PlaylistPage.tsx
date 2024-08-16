
import AddButton from "../AddButton/AddButton";
import ListItem from "../ListItem/ListItem";
import styles from "./PlaylistPage.module.scss";

const PlayistPage = () => {
    const playlistData = [
        {
            id: 1,
            text: 'My Everyday',
            imgSrc: 'playlistimg.svg'
        },
        {
            id: 1,
            text: 'My Everyday',
            imgSrc: 'playlistimg.svg'
        },
        {
            id: 2,
            text: 'Party Songs',
            imgSrc: 'playlistimg.svg'
        },
        {
            id: 3,
            text: 'Car Songs',
            imgSrc: 'playlistimg.svg'
        },
    ];

    return (
        <div className={styles.playlistContainer}>
            <AddButton />
            {playlistData.map(playlistItem => (
                <ListItem
                    key={playlistItem.id}
                    text={playlistItem.text}
                    href={`playlists/${playlistItem.id}`}
                    imgSrc={playlistItem.imgSrc}
                    isArtist={false}
                />

            ))}

        </div>
    );
}

export default PlayistPage;