'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './SearchBar.module.scss';
import ListOptions from './ListOptions/ListOptions';

const listOptions = [
    { id: 1, text: 'Harry Styles', img: '/harryStyles.svg', type: 'singer' },
    { id: 2, text: 'Havana', img: '/havana.svg', type: 'album' },
    { id: 3, text: 'Still Sane', img: '/', type: 'album' },
];

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [filteredOptions, setFilteredOptions] = useState(listOptions);

    useEffect(() => {
        setFilteredOptions(
            query ? listOptions.filter(option =>
                option.text.toLowerCase().includes(query.toLowerCase())
            ) : []
        );
    }, [query]);

    return (
        <div className={styles.mainDiv}>
            <div className={styles.searchContainer}>
                <input
                    className={styles.search}
                    type='search'
                    placeholder='Search'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <Image src='/search icon.svg' width={24} height={24} alt='search icon' className={styles.icon} />
                <div className={styles.border}>
                    {filteredOptions.length > 0 && (
                        <ListOptions options={filteredOptions} onOptionClick={setQuery} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
