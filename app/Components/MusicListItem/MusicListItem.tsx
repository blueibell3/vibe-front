import { useRecoilState } from 'recoil';
import styles from './MusicListItem.module.scss';
import { indexState, isPlayingState, logOutState, musicId } from '@/app/state';

interface Props {
    id: number;
    image: string;
    songTitle: string;
    artistName: string;
    songDuration: string;
    isPlaying?: boolean;
    onClick?: () => void;
    index: number;
}

const MusicListItem = (props: Props) => {
    const [isPlaying] = useRecoilState(isPlayingState);
    const [currentIndex] = useRecoilState(indexState);
    const [logout] = useRecoilState(logOutState);
    const [globalId] = useRecoilState(musicId);

    return (
        <div className={styles.listItem} onClick={props.onClick}>
            <div
                style={{ backgroundImage: `url(${props.image})` }}
                className={styles.itemImageWrapper}
            >
                <div className={logout ? styles.none : styles.itemHoverPhoto}>
                    {isPlaying &&
                    props.index === currentIndex &&
                    globalId === props.id ? (
                        <img
                            className={styles.image}
                            src="/allFolders/PlayerControler/Play.svg"
                            alt="Pause Button"
                        />
                    ) : (
                        <img
                            className={styles.image}
                            src="/allFolders/PlayerControler/Pause.svg"
                            alt="Play Button"
                        />
                    )}
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.sectionCenter}>
                    <div>
                        <h5 className={styles.songName}>{props.songTitle}</h5>
                        <span className={styles.artistName}>
                            {props.artistName}
                        </span>
                    </div>
                    <div>
                        <span className={styles.songDuration}>
                            {props.songDuration}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MusicListItem;
