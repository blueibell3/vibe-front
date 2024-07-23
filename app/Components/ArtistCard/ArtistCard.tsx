import Link from 'next/link';
import styles from './ArtistCard.module.scss'
type Props = {
    title: string
    year: number
    url?: string;
    id?: number;
}

const ArtistCard = (props: Props) => {
    return (
        <Link className={styles.container} href={`${props.id}`}>

            <div className={styles.albom}>
                <img src={props.url} alt="image" width={144} height={140} />
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