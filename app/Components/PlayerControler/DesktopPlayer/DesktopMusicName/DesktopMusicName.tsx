import React from 'react';
import styles from './DesktopMusicName.module.scss';
import { useRecoilState } from 'recoil';
import {
    authorNameState,
    fullScreenState,
    globalImageState,
    indexState,
    musicNameState,
} from '@/app/state';

const DesktopMusicName = () => {
    const [image] = useRecoilState(globalImageState);
    const [fullScreen, setFullScreen] = useRecoilState(fullScreenState);
    const [artist] = useRecoilState(musicNameState);
    const [index] = useRecoilState(indexState);
    const [songName] = useRecoilState(authorNameState);

    return (
        <div
            className={styles.imageAndTitle}
            onClick={() => {
                setFullScreen?.(!fullScreen);
            }}
        >
            <img
                className={styles.image}
                src={
                    image[index]
                        ? image[index]
                        : '/allFolders/images/playerDefault.png'
                }
                alt="Music Cover"
            />
            <span
                className={
                    fullScreen && image[index]
                        ? styles.fullScreentitle
                        : styles.title
                }
            >
                {image[index] && `${songName[index]}  ${'-'} ${artist[index]}`}
            </span>
        </div>
    );
};

export default DesktopMusicName;
