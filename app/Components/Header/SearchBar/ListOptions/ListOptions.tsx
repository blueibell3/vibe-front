import styles from './ListOptions.module.scss';

type Props = {
    id: number;
    text: string;
    img: string;
    type: string;
}

interface ListOptionsProps {
    options: Props[];
    onOptionClick: (text: string) => void;
}
const ListOptions = ({ options, onOptionClick }: ListOptionsProps) => {
    return (
        <ul className={styles.listOptions}>
            {options.map(option => (
                <li
                    key={option.id}
                    className={styles.option}
                    onClick={() => onOptionClick(option.text)}
                >
                    <img
                        src={option.img}
                        alt={option.text}
                        className={`${styles.optionImage} ${option.type === 'album' ? styles.album : styles.singer}`}
                    />
                    <span>{option.text}</span>
                </li>
            ))}
        </ul>
    );
}   

export default ListOptions;