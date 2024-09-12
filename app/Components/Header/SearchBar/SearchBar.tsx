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
    type: 'singer' | 'album';
    link?: string;
};

const SearchBar = () => {
    const [query, setQuery] = useState<string>('');
    const [filteredOptions, setFilteredOptions] = useState<Option[]>([]);

    const fetchOptions = useCallback(async () => {
        if (query) {
            try {
                const response = await axios.get(
                    `https://vibe-backend-prrr.onrender.com/search/?searchField=${query}`
                );

                // Assuming backend returns an object with an `album` array
                const albumData = response.data.album;

                // Map the album data to match the Option type
                const optionsArray = albumData.map((album: any) => ({
                    id: album.id,
                    text: album.title || 'Untitled',  // Handle empty title
                    img: album.musics[0] || '/default.jpg',  // Handle missing music image, provide a fallback image
                    type: 'album',
                    link: `/album/${album.id}`  // Generate a link based on album ID
                }));

                setFilteredOptions(optionsArray);
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
        setQuery(text); // Updates the search input with the selected option text
    };

    return (
        <div className={styles.searchContainer}>
            <input
                className={styles.search}
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)} // Updates the query state while typing
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
