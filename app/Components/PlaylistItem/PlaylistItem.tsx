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
            const token = document.cookie
                .split('; ')
                .find((row) => row.startsWith('token='))
                ?.split('=')[1];
            await axios.patch(
                `https://vibetunes-backend.onrender.com/playlist/${props.id}/add/${props.idsecond}`,
                {},
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                },
            );
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
