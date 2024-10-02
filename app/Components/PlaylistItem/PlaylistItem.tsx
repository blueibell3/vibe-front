import axios from 'axios';
import styles from './PlaylistItem.module.scss';

interface Props {
    playlistName: string;
    id: number;
    idsecond: number;
}

const PlaylistItem = (props: Props) => {
    const addPlaylist = async () => {
        try {
            await axios.patch(`/playlists/addToPlaylist`, {
                playlistId: props.id,
                musicId: props.idsecond,
            });
        } catch (error) {
            alert(error);
        }
    };

    return (
        <div className={styles.item} onClick={addPlaylist}>
            <span className={styles.title}>{props.playlistName}</span>
        </div>
    );
};

export default PlaylistItem;
