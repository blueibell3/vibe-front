import React from 'react';
import { useRecoilState } from 'recoil';
import styles from './FullScreenName.module.scss';
import {
    authorNameState,
    fullScreenState,
    globalImageState,
    indexState,
    musicNameState,
} from '@/app/state';

const FullScreenName = () => {
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
                className={styles.fullScreenImage}
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

export default FullScreenName;
