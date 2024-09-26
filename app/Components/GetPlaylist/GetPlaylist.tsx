import styles from './GetPlaylist.module.scss'
import axios from "axios";
import { useState, useEffect } from "react";

 type Playlist = {
    id: number;
    name: string;
    description?: string;
    lastName: string;
};

const GetPlaylist = () => {
    const [playlist, setPlaylist] = useState<Playlist[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    return (
        <div className={styles.playlist}>
            {/* {loading && <div>Loading...</div>} */}
            {/* {error && <div>{error}</div>} */}
            {!loading && !error && playlist.map((item) => (
                <span>
                    {item.name}
                    {item.id}
                    {false}
                </span>
            ))}

        </div>
    )
}

export default GetPlaylist