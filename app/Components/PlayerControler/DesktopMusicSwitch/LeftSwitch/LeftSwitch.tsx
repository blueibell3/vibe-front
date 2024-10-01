import { useRecoilState } from 'recoil';
import { indexState, musicGlobalState, shuffleState } from '@/app/state';
import styles from './LeftSwitch.module.scss';

const LeftSwitch = () => {
    const [, setIndex] = useRecoilState(indexState);
    const [musicSrc] = useRecoilState(musicGlobalState);
    const [isShuffle] = useRecoilState(shuffleState);

    const playPrevious = () => {
        if (isShuffle) {
            const randomIndex = Math.floor(Math.random() * musicSrc.length);
            setIndex(randomIndex);
        } else {
            setIndex((prevIndex) =>
                prevIndex > 0 ? prevIndex - 1 : musicSrc.length - 1,
            );
        }
    };

    return (
        <img
            className={styles.LeftSwitch}
            src="/allFolders/PlayerControler/LeftSwitch.svg"
            alt="Left Switch"
            onClick={playPrevious}
        />
    );
};

export default LeftSwitch;
