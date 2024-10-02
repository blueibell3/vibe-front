import PlaylistItem from '@/app/Components/PlaylistItem/PlaylistItem';
import { useEffect, useState } from 'react';
import styles from './DropDownMenu.module.scss';
import Link from 'next/link';
import axios from 'axios';

interface Playlists {
    name: string;
    title: string;
    id: number;
}

interface Props {
    id: number;
}

const DropDownMenu = (props: Props) => {
    const [playlists, setPlaylist] = useState<Playlists[]>([]);
    const [, setId] = useState<number>();
    console.log(playlists);

    useEffect(() => {
        const token = document.cookie
            .split('; ')
            .find((row) => row.startsWith('token='))
            ?.split('=')[1];

        axios
            .get('https://vibetunes-backend.onrender.com/playlist', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                setPlaylist(res.data);
            })
            .catch((error) => {
                console.error('Error fetching playlists:', error);
            });
    }, []);

    useEffect(() => {
        axios
            .get('/musics')
            .then((res) => {
                setId(res.data.id);
            })
            .catch((error) => {
                console.error('Error fetching music id:', error);
            });
    }, []);

    return (
        <div className={styles.container}>
            <Link className={styles.create} href="/playlist">
                + Create Playlist
            </Link>
            {playlists.map((playlist) => (
                <PlaylistItem
                    playlistName={playlist.name}
                    key={playlist.id}
                    id={playlist.id}
                    idsecond={props.id}
                />
            ))}
        </div>
    );
};

export default DropDownMenu;
