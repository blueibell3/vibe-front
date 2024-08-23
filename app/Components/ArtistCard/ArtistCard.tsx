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
                {/* <div className={styles.imgWrap}> */}
                <img className={styles.artistImage} src={props.url} alt="image" />
                {/* </div> */}
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