'use client';
import { useRecoilState } from 'recoil';
import styles from './MobileMusicName.module.scss';
import Name from './Name/Name';
import { fullScreenState, globalImageState, indexState } from '@/app/state';

const MobileMusicName = () => {
    const [fullScreen, setFullScreen] = useRecoilState(fullScreenState);
    const [image] = useRecoilState(globalImageState);
    const [index] = useRecoilState(indexState);
    return (
        <div
            className={styles.nameContainer}
            onClick={() => {
                if (image[index]) setFullScreen(!fullScreen);
            }}
        >
            <img
                className={styles.image}
                src={image[index] ? image[index] : '/whiteLogo.png'}
                alt="photo"
            />
            <Name />
        </div>
    );
};

export default MobileMusicName;
