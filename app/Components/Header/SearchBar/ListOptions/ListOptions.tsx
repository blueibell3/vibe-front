import Link from 'next/link';
import styles from './ListOptions.module.scss';
import { useRecoilState } from 'recoil';
import {
    musicId,
    isPlayingState,
    musicGlobalState,
    indexState,
    globalImageState,
    musicNameState,
    authorNameState,
} from '@/app/state';

type Option = {
    id: number;
    text: string;
    img?: string;
    type: 'albums' | 'author' | 'music';
    link?: string;
    musicSrc?: string;
    artistName?: string;
};

interface ListOptionsProps {
    options: Option[];
    onOptionClick?: (text: string) => void;
}

const ListOptions = ({ options, onOptionClick }: ListOptionsProps) => {
    const [globalId, setGlobalId] = useRecoilState(musicId);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const [, setGlobalsrc] = useRecoilState(musicGlobalState);
    const [, setActiveIdx] = useRecoilState(indexState);
    const [, setImage] = useRecoilState(globalImageState);
    const [, setMusicName] = useRecoilState(musicNameState);
    const [, setAuthorName] = useRecoilState(authorNameState);

    const handleClick = (option: Option, index: number) => {
        if (globalId === option.id) {
            setIsPlaying(!isPlaying);
        } else {
            setIsPlaying(true);
            setGlobalId(option.id);

            setGlobalsrc(
                options.map((opt) => ({
                    audioUrl: opt.musicSrc || '',
                    id: opt.id,
                })),
            );

            setActiveIdx(index);
            setImage(options.map((opt) => opt.img || '')); 
            setMusicName(options.map((opt) => opt.text));
            setAuthorName(options.map((opt) => opt.artistName || ''));
        }

        onOptionClick && onOptionClick(option.text);
    };

    return (
        <ul className={styles.listOptions}>
            {options.map((option, index) => (
                <li className={styles.option} key={option.id}>
                    {option.type === 'music' ? (
                        <div
                            className={styles.songStyle}
                            onClick={() => handleClick(option, index)}
                        >
                            {option.img && (
                                <img
                                    src={option.img}
                                    width={50}
                                    height={50}
                                    className={`${styles.optionImage} ${styles[option.type]}`}
                                />
                            )}
                            <div>
                                <div>
                                    <span className={styles.optionText}>
                                        {option.text}
                                    </span>
                                </div>
                                <div className={styles.artistName}>
                                    <span className={styles.names}>
                                        {option.artistName}
                                    </span>
                                    <span className={styles.alm}>~song</span>
                                </div>
                            </div>
                        </div>
                    ) : option.type === 'albums' ? (
                        <Link
                            href={`/albums/${option.id}`}
                            onClick={() =>
                                onOptionClick && onOptionClick(option.text)
                            }
                        >
                            <div className={styles.artistAlbums}>
                                {option.img && (
                                    <img
                                        src={option.img}
                                        width={50}
                                        height={50}
                                        className={`${styles.optionImage} ${styles[option.type]}`}
                                    />
                                )}
                                <div>
                                    <div>
                                        <span className={styles.optionText}>
                                            {option.text}
                                        </span>
                                    </div>
                                    <div>
                                        <span className={styles.names}>
                                            {option.artistName}
                                        </span>
                                        <span className={styles.alm}>
                                            ~album
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ) : (
                        <Link
                            href={`/artist/${option.id}`}
                            onClick={() =>
                                onOptionClick && onOptionClick(option.text)
                            }
                        >
                            <div className={styles.artistAlbums}>
                                {option.img && (
                                    <img
                                        src={option.img}
                                        width={50}
                                        height={50}
                                        className={`${styles.optionImage} ${styles[option.type]}`}
                                    />
                                )}
                                <div>
                                    <span className={styles.optionText}>
                                        {option.text}
                                    </span>
                                    <span className={styles.alm}>~artist</span>
                                </div>
                            </div>
                        </Link>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default ListOptions;
