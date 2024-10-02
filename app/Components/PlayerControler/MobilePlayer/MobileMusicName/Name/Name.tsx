import { useRecoilState } from 'recoil';
import styles from './Name.module.scss';
import { authorNameState, indexState, musicNameState } from '@/app/state';

const Name = () => {
    const [musicName] = useRecoilState(musicNameState);
    const [authorName] = useRecoilState(authorNameState);
    const [index] = useRecoilState(indexState);
    return (
        <div className={styles.nameContainer}>
            <span className={styles.autor}>{authorName[index]}</span>
            <span className={styles.name}>{musicName[index]}</span>
        </div>
    );
};

export default Name;
