import Link from 'next/link';
import styles from './ArtistCard.module.scss'
type Props = {
    title: string
    year: string;
    url?: string;
    id: number;
}

const ArtistCard = (props: Props) => {
    return (
        <Link className={styles.container} href={`artist/${props.id}`}>
            <div className={styles.albom}>
                <img className={styles.artistImage} src={props.url} alt="image" />
                <div className={styles.describtion}>
                    <div>
                        {props.title}
                    </div>
                    <div className={styles.year}>{props.year}</div>
                </div>
            </div>
        </Link>
    )
}

export default ArtistCard