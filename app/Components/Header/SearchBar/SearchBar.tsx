'use client';
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Image from 'next/image';
import styles from './SearchBar.module.scss';
import ListOptions from './ListOptions/ListOptions';

type Option = {
    id: number;
    text: string;
    img?: string;
    type: 'album' | 'author' | 'music';
    link?: string;
    musicSrc?: string;
};

interface Album {
    firstName: string;
    lastName: string;
    id: number;
    title: string;
    file?: string;
}

interface Author {
    id: number;
    firstName: string;
    lastName: string;
    file?: string;
}

interface Music {
    id: number;
    name: string;
    firstName: string;
    lastName: string;
    photo?: string;
    audioSrc?: string;
}

interface ApiResponse {
    album: Album[];
    author: Author[];
    music: Music[];
}

const SearchBar = () => {
    const [query, setQuery] = useState<string>('');
    const [filteredOptions, setFilteredOptions] = useState<Option[]>([]);

    const fetchOptions = useCallback(async () => {
        if (query) {
            try {
                const token = document.cookie
                    .split('; ')
                    .find((row) => row.startsWith('token='))
                    ?.split('=')[1];

                if (!token) {
                    throw new Error('No token found');
                }

                const response = await axios.get<ApiResponse>(`https://vibetunes-backend.onrender.com/search/?searchField=${query}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                });

                const { album: albumData, author: authorData, music: musicData } = response.data;

                if (!albumData || !authorData || !musicData) {
                    console.error('Data missing in response:', response.data);
                    setFilteredOptions([]);
                    return;
                }

                const albumOptions = albumData.map((album: Album) => ({
                    id: album.id,
                    text:  album.title || 'Untitled',
                    file: album.file || '/default-album.jpg',
                    type: 'album' as const,
                    link: `/album/${album.id}`,
                    firstName: album.firstName, 
                    lastName: album.lastName,
                }));

                const authorOptions = authorData.map((author: Author) => ({
                    id: author.id,
                    text: `${author.firstName} ${author.lastName}` || 'Unknown Author',
                    file: author.file || '/default-author.jpg',
                    type: 'author' as const,
                    link: `/author/${author.id}`,
                    firstName: author.firstName,
                    lastName: author.lastName,
                }));

                const musicOptions = musicData.map((music: Music) => ({
                    id: music.id,
                    text: music.name || 'Untitled Music',
                    photo: music.photo || '/default-music.jpg',
                    type: 'music' as const,
                    musicSrc: music.audioSrc || '',
                    firstName: music.firstName,
                    lastName: music.lastName,
                }));

                const allOptions = [...albumOptions, ...authorOptions, ...musicOptions];
                setFilteredOptions(allOptions);

            } catch (error) {
                console.error('Error fetching search options:', error);
                setFilteredOptions([]);
            }
        } else {
            setFilteredOptions([]);
        }
    }, [query]);

    useEffect(() => {
        fetchOptions();
    }, [query, fetchOptions]);

    const handleOptionClick = (text: string) => {
        setQuery(text);
    };

    return (
        <div className={styles.searchContainer}>
            <input
                className={styles.search}
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <Image
                src="/search icon.svg"
                width={24}
                height={24}
                alt="search icon"
                className={styles.icon}
            />
            <div className={styles.border}>
                {filteredOptions.length > 0 && (
                    <ListOptions options={filteredOptions} onOptionClick={handleOptionClick} />
                )}
            </div>
        </div>
    );
};

export default SearchBar;
