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
                        imageUrl={track.photo.url}  // Ensure you're accessing the correct property
                        songName={track.name}
                        artistName={track.artist}
                        trackUrl={track.url} // Assuming you have this property in your track object
                    />
                );
            })}
        </div>
    );
};

export default Playlist;
