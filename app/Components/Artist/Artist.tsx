'use client'
import ListItem from "../ListItem/ListItem";
import styles from "./Artist.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";

type Author = {
    id: number,
    file: string,
    firstName: string
    lastName:string
}

const Artist = () => {
    const [authorData, setAuthorData] = useState<Author[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const token = document.cookie
                    .split('; ')
                    .find((row) => row.startsWith('token='))
                    ?.split('=')[1];

                if (!token) {
                    throw new Error('No token found');
                }

                const response = await axios.get(`https://vibetunes-backend.onrender.com/author`, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                });

                setAuthorData(Array.isArray(response.data) ? response.data : [response.data]);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError('Failed to fetch albums');
                setLoading(false);
            }
        };

        fetchAlbums();
    }, []);
    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (

        <div className={styles.artistContainer}>
            {authorData.map(artistItem => (
                <ListItem
                    key={artistItem.id}
                    name={artistItem.firstName}
                    imgSrc={artistItem.file}
                    isArtist={true}
                    id={artistItem.id}
                    link={`/artist/${artistItem.id}`}
                    lastName={artistItem.lastName} />
            ))}
        </div>
    );
}

export default Artist;