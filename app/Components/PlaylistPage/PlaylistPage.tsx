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
            id: 2,
            text: 'My Everyday',
            imgSrc: 'playlistimg.svg'
        },
        {
            id: 3,
            text: 'Party Songs',
            imgSrc: 'playlistimg.svg'
        },
        {
            id: 4,
            text: 'Car Songs',
            imgSrc: 'playlistimg.svg'
        },
    ];

    return (
        <div className={styles.playlistContainer}>
            <AddButton />
            {playlistData.map(playlistItem => (
                <ListItem
                    id={playlistItem.id}
                    key={playlistItem.id}
                    text={playlistItem.text}
                    imgSrc={playlistItem.imgSrc}
                    isArtist={false}
                    link={`/playlist/${playlistItem.id}`} 
                     />
            ))}

        </div>
    );
}

export default PlayistPage;