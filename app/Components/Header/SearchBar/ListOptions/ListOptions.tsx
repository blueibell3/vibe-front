import styles from './ListOptions.module.scss';

type Props = {
    id: number;
    text: string;
    img?: string;
    type: 'album' | 'author' | 'music';
    link?: string;
};

interface ListOptionsProps {
    options: Props[];
    onOptionClick?: (text: string) => void;
}

const ListOptions = ({ options, onOptionClick }: ListOptionsProps) => {
    return (
        <ul className={styles.listOptions}>
            {options.map(option => (
                <li className={styles.option} key={option.id}>
                    <div
                        onClick={() => {
                            if (onOptionClick) {
                                onOptionClick(option.text); // Sends the clicked text back to SearchBar
                            }
                        }}
                    >
                        <img
                            src={option.img}
                            alt={option.text}
                            className={`${styles.optionImage} ${styles[option.type]}`}
                        />
                        <span className={styles.optionText}>{option.text}</span>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default ListOptions;
