import { useRecoilState } from 'recoil';
import styles from './FullScreenImage.module.scss';
import { fullScreenState, globalImageState, indexState } from '@/app/state';

const FullScreenImage = () => {
    const [fullScreen, setFullScreen] = useRecoilState(fullScreenState);
    const [image] = useRecoilState(globalImageState);
    const [index] = useRecoilState(indexState);

    const fullFunc = () => {
        setFullScreen(!fullScreen);
    };

    return (
        <div className={styles.fullScreenImage}>
            <img
                className={styles.backButton}
                src="/allFolders/PlayerControler/TabletBackButton.svg"
                alt="TabletBackButton"
                onClick={() => {
                    fullFunc();
                }}
            />
            <img className={styles.image} src={image[index]} alt="photo" />
        </div>
    );
};

export default FullScreenImage;
