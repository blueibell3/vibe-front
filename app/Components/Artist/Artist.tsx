'use client'
import ListItem from "../ListItem/ListItem";
import styles from "./Artist.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";

type File = {
    id: number;
    url: string;
    key: string;
    bucket: string;
    fileName: string;
};

type Author = {
    id: number;
    firstName: string;
    lastName: string;
    file: File | null;
};

const Artist = () => {
    const [authorData, setAuthorData] = useState<Author[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchArtists = async () => {
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
                        Authorization: `Bearer ${token}`,
                    },
                });

                setAuthorData(Array.isArray(response.data) ? response.data : [response.data]);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError('Failed to fetch artists');
                setLoading(false);
            }
        };

        fetchArtists();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className={styles.artistContainer}>
            {authorData.map((artistItem) => (
                <ListItem
                    key={artistItem.id}
                    name={artistItem.firstName}
                    imgSrc={artistItem.file?.url || '/default-image.png'}
                    isArtist={true}
                    id={artistItem.id}
                    link={`/artist/${artistItem.id}`}
                    lastName={artistItem.lastName} 
                    showIcon={false}                />
            ))}
        </div>
    );
};

export default Artist;
