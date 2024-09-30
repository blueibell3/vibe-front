import MusicList from '@/app/Components/MusicList/MusicList';
import Arrows from '../../Arrows/Arrows';
import styles from './TabletArrow.module.scss';
import { useState } from 'react';
import { playlistState } from '@/app/state';
import { useRecoilValue } from 'recoil';

const TabletArrow = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const playlist = useRecoilValue(playlistState);

    const handleArrowClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`${styles.arrowWrappers} ${isExpanded ? styles.expanded : ''}`}>
            <Arrows isUp={!isExpanded} onClick={handleArrowClick} />
            <div className={styles.MusicLists}>
                <span className={styles.nextSpans}>Next Play</span>
                {playlist.slice(0, isExpanded ? 6 : 3).map((track, index) => {
                    return (
                        <MusicList
                            key={index}
                            imageUrl={track.photo.url}  
                            songName={track.name}
                            artistName={track.artist}
                            trackIndex={index}
                            trackUrl={track.url} 
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default TabletArrow;
