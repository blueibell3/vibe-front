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
    type: 'albums' | 'author' | 'music';
    link?: string;
    musicSrc?: string;
    artistName?: string;
};

interface Album {
    id: number;
    title: string;
    artistName: string;
    file: {
        url: string;
    };
}

interface Author {
    id: number;
    artistName: string;
    firstName: string;
    lastName: string;
    file: {
        url: string;
    };
    biography: string;
}

interface Music {
    [x: string]: any;
    id: number;
    name: string;
    musicSrc?: string;
    artistName: string;
    photo: {
        url: string;
    };
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
            console.log(`Searching for: ${query}`);

            try {
                const token = document.cookie
                    .split('; ')
                    .find((row) => row.startsWith('token='))
                    ?.split('=')[1];

                if (!token) {
                    throw new Error('No token found');
                }

                const response = await axios.get<ApiResponse>(
                    `https://vibetunes-backend.onrender.com/search?searchField=${query}`,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${token}`,
                        },
                    },
                );

                const authors = response.data.author;
                console.log(authors, 'author');

                const albumOptions: Option[] = response.data.album.map(
                    (album: Album) => ({
                        id: album.id,
                        text: album.title,
                        img: album.file.url,
                        type: 'albums',
                        link: `/albums/${album.id}`,
                        artistName: album.artistName,
                    }),
                );

                const authorOptions: Option[] = authors.map(
                    (author: Author) => ({
                        id: author.id,
                        text: `${author.firstName} ${author.lastName}`,
                        img: author.file.url,
                        type: 'author',
                        link: `/artist/${author.id}`,
                    }),
                );

                const musicOptions: Option[] = response.data.music.map(
                    (musicItem: Music) => ({
                        id: musicItem.id,
                        text: musicItem.name,
                        img: musicItem.photo.url,
                        type: 'music',
                        musicSrc: musicItem.url.url,
                        artistName: musicItem.artistName,
                    }),
                );

                console.log(musicOptions, 'musicOptions');

                const allOptions: Option[] = [
                    ...albumOptions,
                    ...authorOptions,
                    ...musicOptions,
                ];

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
        setQuery('');
        setFilteredOptions([]);
        console.log(`Selected option: ${text}`);
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
                {filteredOptions.length > 0 ? (
                    <ListOptions
                        options={filteredOptions}
                        onOptionClick={handleOptionClick}
                    />
                ) : null}
            </div>
        </div>
    );
};

export default SearchBar;
