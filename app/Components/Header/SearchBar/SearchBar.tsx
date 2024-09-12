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
        
                const { album: albumData, author: authorData, music: musicData } = response.data;
    
                if (!albumData || !authorData || !musicData) {
                    console.error('Data missing in response:', response.data);
                    setFilteredOptions([]);
                    return;
                }
    
                const albumOptions = albumData.map((album: any) => ({
                    id: album.id,
                    text: album.title || 'Untitled',
                    img: album.musics[0] || '/default.jpg',
                    type: 'album',
                    link: `/album/${album.id}`,
                }));
    
                const authorOptions = authorData.map((author: any) => ({
                    id: author.id,
                    text: author.firstName + ' ' + author.lastName || 'Unknown Author',
                    img: author.profilePic || '/default-author.jpg',
                    type: 'author',
                    link: `/author/${author.id}`,
                }));
    
                const musicOptions = musicData.map((music: any) => ({
                    id: music.id,
                    text: music.name || 'Untitled Music',
                    img: music.albumCover || '/default-music.jpg',
                    type: 'music',
                    link: `/music/${music.id}`,
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
