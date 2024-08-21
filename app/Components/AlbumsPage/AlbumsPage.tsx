import React from 'react';

import styles from "./AlbumsPage.module.scss";
import AlbumCard from '../AlbumCard/AlbumCard';

const AlbumsPage = () => {
    const albumsData = [
        {
            id: 1,
            imageUrl: '/albumsimg.svg',
            songName: 'One of wun ',
            artistName: 'Gunna',
            year: '2000'
        },
        {
            id: 2,
            imageUrl: '/albumsimg.svg',
            songName: 'Dangerous',
            artistName: 'Billie Eillish',
            year: '2000'
        },
        {
            id: 3,
            imageUrl: '/albumsimg.svg',
            songName: 'Dangerous',
            artistName: 'Billie Eillish',
            year: '2000'
        },
        {
            id: 4,
            imageUrl: '/albumsimg.svg',
            songName: 'Dangerous',
            artistName: 'Billie Eillish',
            year: '2000'
        },
        {
            id: 5,
            imageUrl: '/albumsimg.svg',
            songName: 'Dangerous',
            artistName: 'Billie Eillish',
            year: '2000'
        },
        {
            id: 6,
            imageUrl: '/albumsimg.svg',
            songName: 'Dangerous',
            artistName: 'Billie Eillish',
            year: '2000'
        },
        {
            id: 7,
            imageUrl: '/albumsimg.svg',
            songName: 'Dangerous',
            artistName: 'Billie Eillish',
            year: '2000'
        },
        {
            id: 8,
            imageUrl: '/albumsimg.svg',
            songName: 'Dangerous',
            artistName: 'Billie Eillish',
            year: '2000'
        },
    ];

    return (
      <>
        <div className={styles.albumsContainer}>
            {albumsData.map(albums => (
                <AlbumCard
                    key={albums.id}
                    imageUrl={albums.imageUrl}
                    songName={albums.songName}
                    artistName={albums.artistName}
                    year={albums.year}
                    id={albums.id}
                />
            ))}
        </div>
      </>
    );
}

export default AlbumsPage;