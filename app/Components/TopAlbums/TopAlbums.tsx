import React from 'react';
import AlbumCard from "../AlbumCard/AlbumCard";
import styles from "./TopAlbums.module.scss";

const Albums = () => {
    const albumData = [
        {
            id: 1,
            imageUrl: 'https://media.architecturaldigest.com/photos/5890e88033bd1de9129eab0a/1:1/w_870,h_870,c_limit/Artist-Designed%20Album%20Covers%202.jpg',
            songName: 'Dead Magic',
            artistName: 'Anna von Hausswolf',
            year: '2018'
        },
        {
            id: 2,
            imageUrl: 'https://media.architecturaldigest.com/photos/5890e88033bd1de9129eab0a/1:1/w_870,h_870,c_limit/Artist-Designed%20Album%20Covers%202.jpg',
            songName: 'Dead Magic',
            artistName: 'Anna von Hausswolf',
            year: '2018'
        },
        {
            id: 3,
            imageUrl: 'https://media.architecturaldigest.com/photos/5890e88033bd1de9129eab0a/1:1/w_870,h_870,c_limit/Artist-Designed%20Album%20Covers%202.jpg',
            songName: 'Dead Magic',
            artistName: 'Anna von Hausswolf',
            year: '2018'
        },
        {
            id: 4,
            imageUrl: 'https://media.architecturaldigest.com/photos/5890e88033bd1de9129eab0a/1:1/w_870,h_870,c_limit/Artist-Designed%20Album%20Covers%202.jpg',
            songName: 'Dead Magic',
            artistName: 'Anna von Hausswolf',
            year: '2018'
        },
        {
            id: 5,
            imageUrl: 'https://media.architecturaldigest.com/photos/5890e88033bd1de9129eab0a/1:1/w_870,h_870,c_limit/Artist-Designed%20Album%20Covers%202.jpg',
            songName: 'Dead Magic',
            artistName: 'Anna von Hausswolf',
            year: '2018'
        },
        {
            id: 6,
            imageUrl: 'https://media.architecturaldigest.com/photos/5890e88033bd1de9129eab0a/1:1/w_870,h_870,c_limit/Artist-Designed%20Album%20Covers%202.jpg',
            songName: 'Dead Magic',
            artistName: 'Anna von Hausswolf',
            year: '2018'
        },
        {
            id: 7,
            imageUrl: 'https://media.architecturaldigest.com/photos/5890e88033bd1de9129eab0a/1:1/w_870,h_870,c_limit/Artist-Designed%20Album%20Covers%202.jpg',
            songName: 'Dead Magic',
            artistName: 'Anna von Hausswolf',
            year: '2018'
        },
        {
            id: 8,
            imageUrl: 'https://media.architecturaldigest.com/photos/5890e88033bd1de9129eab0a/1:1/w_870,h_870,c_limit/Artist-Designed%20Album%20Covers%202.jpg',
            songName: 'Dead Magic',
            artistName: 'Anna von Hausswolf',
            year: '2018'
        },
    ];

    return (
      <>
      
        <div className={styles.albumsContainer}>
            {albumData.map(album => (
                <AlbumCard
                    key={album.id}
                    id={album.id}
                    imageUrl={album.imageUrl}
                    songName={album.songName}
                    artistName={album.artistName}
                    year={album.year}
                />
            ))}
        </div>
      </>
    );
}

export default Albums;

