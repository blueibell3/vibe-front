import { useRecoilState } from 'recoil';
import styles from './TabletName.module.scss';
import {
    authorNameState,
    fullScreenState,
    indexState,
    musicNameState,
} from '@/app/state';

const TabletName = () => {
    const [fullScreen] = useRecoilState(fullScreenState);
    const [musicname] = useRecoilState(musicNameState);
    const [authorName] = useRecoilState(authorNameState);
    const [index] = useRecoilState(indexState);
    return (
        <div className={styles.tabletAndMusicBox}>
            <span
                className={
                    fullScreen ? styles.musicFullScreen : styles.musicName
                }
            >
                {authorName[index]}
            </span>
            <span className={fullScreen ? styles.nameFullScreen : styles.name}>
                {musicname[index]}
            </span>
        </div>
    );
};

export default TabletName;
