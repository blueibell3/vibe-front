'use client';
import styles from './MusicList.module.scss'
import { useRecoilValue } from "recoil";
import MusicList from "./MusicList"
import { playlistState, currentTrackIndexState } from '@/app/state';


const MusicListItems = () => {
    const playlist = useRecoilValue(playlistState);
    const currentTrackIndex = useRecoilValue(currentTrackIndexState);


    return (
        <div className={styles.container}>
            <div className={styles.trackInfo}>
                <img src={playlist[currentTrackIndex].photo} alt={playlist[currentTrackIndex].name} className={styles.trackPhoto} />
            </div>
            <div className={styles.trackDetails}>
                <div className={styles.artistName}>{playlist[currentTrackIndex].artist}</div>
                <div className={styles.trackName}>{playlist[currentTrackIndex].name}</div>
            </div>
            <span > Next Play</span>
            <div className={styles.listWrap}>
                {playlist.map((track, index) => (
                    <MusicList
                        key={index}
                        imageUrl={track.photo}
                        songName={track.name}
                        artistName={track.artist}
                        trackIndex={index}
                        time={new Date((track.duration ?? 0) * 1000).toISOString().substr(14, 5)}
                    />
                ))}
            </div>
        </div >

    )
}

export default MusicListItems