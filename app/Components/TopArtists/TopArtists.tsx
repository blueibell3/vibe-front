'use client'
import { useEffect, useState } from "react";
import ListItem from "../ListItem/ListItem";
import styles from "./TopArtists.module.scss";
import axios from "axios";

type Artist = {
    id: number;
    firstName: string;
    lastName: string;
    file: {
        url: string;
    };
    releaseDate: string;
};

type Props = {
    limit: number;
};

const TopArtists = ({ limit }: Props) => {
    const [artistsData, setArtistsData] = useState<Artist[]>([]);
    useEffect(() => {
        const fetchArtists = async () => {
            try {
                const token = document.cookie
                    .split('; ')
                    .find((row) => row.startsWith('token='))
                    ?.split('=')[1];

                const response = await axios.get('https://vibetunes-backend.onrender.com/author/topArtists', {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                });

                setArtistsData(response.data);
            } catch (error) {
                console.error('Error fetching artist data:', error);
            }
        };

        fetchArtists();
    }, []);


    return (
        <div className={styles.topArtistContainer}>
            {artistsData.slice(0, limit).map((TopArtistsItem) => (
                <ListItem
                    key={TopArtistsItem.id}
                    name={TopArtistsItem.firstName}
                    link={`artist/${TopArtistsItem.id}`}
                    imgSrc={TopArtistsItem.file.url}
                    isArtist={true}
                    id={TopArtistsItem.id}
                    showIcon={false} />

            ))}
        </div>
    );
}

export default TopArtists;