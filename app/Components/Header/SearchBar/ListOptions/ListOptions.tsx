import Link from 'next/link';
import styles from './ListOptions.module.scss';

type Props = {
    id: number;
    text: string;
    photo?: string;
    file?: string;
    type: 'album' | 'author' | 'music';
    link?: string;
    musicSrc?: string;
    firstName?: string; 
    lastName?: string;
};

interface ListOptionsProps {
    options: Props[];
    onOptionClick?: (text: string) => void;
}

const ListOptions = ({ options, onOptionClick }: ListOptionsProps) => {
    const playMusic = (musicSrc: string) => {
        const audio = new Audio(musicSrc);
        audio.play();
    };

    return (
        <ul className={styles.listOptions}>
            {options.map(option => (
                <li className={styles.option} key={option.id}>
                    {option.type === 'music' ? (
                        <div onClick={() => playMusic(option.musicSrc!)}>
                            <img
                                src={option.photo}
                                alt={'img'}
                                className={`${styles.optionImage} ${styles[option.type]}`}
                                width={200} 
                                height={200} 
                            />
                            <span className={styles.optionText}>{option.text}</span>
                            {option.firstName && option.lastName && (
                                <span className={styles.names}>{option.firstName} {option.lastName}</span>
                            )}
                        </div>
                    ) : option.type === 'album' ? (
                        <Link href={option.link!}>
                            <div className={styles.artistAlbums}>
                                <img
                                    src={option.file}
                                    alt={'img'}
                                    className={`${styles.optionImage} ${styles[option.type]}`}
                                />
                                <div>
                                    <div>
                                        <span className={styles.optionText}>{option.text}</span>
                                    </div>
                                    {option.firstName && option.lastName && (
                                        <span className={styles.names}>{option.firstName} {option.lastName}</span>
                                    )}
                                </div>
                            </div>
                        </Link>
                    ) : (
                        <Link href={option.link!}>
                            <div className={styles.artistAlbums}>
                                <img
                                    src={option.file}
                                    alt={'img'}
                                    className={`${styles.optionImage} ${styles[option.type]}`}
                                />
                                <span className={styles.optionText}>{option.text}</span>
                            </div>
                        </Link>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default ListOptions;
