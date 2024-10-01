import { useRecoilState } from 'recoil';
import styles from './Shuffle.module.scss';
import { shuffleState } from '@/app/state';

const Shuffle = () => {
    const [isShuffle, setIsShuffle] = useRecoilState(shuffleState);

    const handleShuffleClick = () => {
        setIsShuffle(!isShuffle);
    };

    return (
        <>
            {isShuffle ? (
                <img
                    onClick={handleShuffleClick}
                    className={styles.shuffle}
                    src="/icons/pinkShuffle.svg"
                    alt="shuffle"
                />
            ) : (
                <img
                    onClick={handleShuffleClick}
                    className={styles.shuffle}
                    src="/icons/shuffle.svg"
                    alt="Messy"
                />
            )}
        </>
    );
};

export default Shuffle;
