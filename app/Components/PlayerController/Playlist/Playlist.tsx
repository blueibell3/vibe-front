import { useRecoilValue } from 'recoil';
import { playlistState } from '@/app/state';
import MusicList from '../../MusicList/MusicList';

const Playlist = () => {
    const playlist = useRecoilValue(playlistState);

    return (
        <div>
            {playlist.map((track, index) => {
                

                return (
                    <MusicList
                        key={index}
                        trackIndex={index}
                        imageUrl={track.photo.url}
                        songName={track.name}
                        artistName={track.artist} id={track.id}                     
                    />
                );
            })}
        </div>
    );
};

export default Playlist;