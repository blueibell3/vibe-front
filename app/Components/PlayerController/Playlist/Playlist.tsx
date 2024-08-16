import { useRecoilValue } from 'recoil';
import { playlistState } from '@/app/state';
import MusicList from '../../MusicList/MusicList';

const Playlist = () => {
    const playlist = useRecoilValue(playlistState);

    return (
        <div>
            {playlist.map((track, index) => {
                const formattedTime = track.duration
                    ? new Date(track.duration * 1000).toISOString().substr(14, 5)
                    : "00:00";

                return (
                    <MusicList
                        key={index}
                        trackIndex={index}
                        imageUrl={track.photo}
                        songName={track.name}
                        artistName={track.artist}
                        time={formattedTime}
                    />
                );
            })}
        </div>
    );
};

export default Playlist;
