import React from 'react';
import { useRecoilValue } from 'recoil';
import { playlistState } from '@/app/state';
import MusicList from '../../MusicList/MusicList';

const Playlist = () => {
    const playlist = useRecoilValue(playlistState);

    return (
        <div>
            {playlist.map((track, index) => (
                <MusicList
                    key={index}
                    trackIndex={index} 
                    imageUrl={track.photo}
                    songName={track.name}
                    artistName={track.artist}
                    time={new Date((track.duration || 0) * 1000).toISOString().substr(14, 5)} 
                />
            ))}
        </div>
    );
};

export default Playlist;
