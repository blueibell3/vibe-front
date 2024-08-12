
import AddButton from "../AddButton/AddButton";
import ListItem from "../ListItem/ListItem";
import styles from "./PlaylistPage.module.scss";

const PlayistPage = () => {
    const playlistData = [
        {
            href: '/musiplaylistsongsclist',
            id: 1,
            text: 'My Everyday',
            type: 'playlist',
            playlistImg: 'playlistimg.svg'
        },
        {
            href: '/musiplaylistsongsclist',
            id: 1,
            text: 'My Everyday',
            type: 'playlist',
            playlistImg: 'playlistimg.svg'
        },
        {
            href: '/playlistsongs',
            id: 2,
            text: 'Party Songs',
            type: 'playlist',
            playlistImg: 'playlistimg.svg'
        },
        {
            href: '/playlistsongs',
            id: 3,
            text: 'Car Songs',
            type: 'playlist',
            playlistImg: 'playlistimg.svg'
        },



    ];

    return (


        <div className={styles.playlistContainer}>
            <AddButton />
            {playlistData.map(playlistItem => (
                <ListItem
                    key={playlistItem.id}
                    id={playlistItem.id}
                    text={playlistItem.text}
                    type={playlistItem.type}
                    href={playlistItem.href}
                    isAlbumImg={playlistItem.playlistImg}
                />

            ))}

        </div>
    );
}

export default PlayistPage;