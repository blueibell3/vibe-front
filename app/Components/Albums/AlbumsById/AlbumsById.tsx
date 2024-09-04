
import TrendHitsPage from "../../TrendHits/TrendHits";
import styles from './AlbumsById.module.scss'


type Props = {
    id: number;
}

const AlbumsById = (props: Props) => {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.pageTitle}>All songs</div>
                <div className={styles.pageDescripton}>
                    <img className={styles.img} src='/albumsidimg.svg' />
                    <span className={styles.pageTitle}>Lovers</span>
                    <span className={styles.artistName}>Taylor Swift</span>
                </div>
                <div className={styles.musicCards}>
                   <TrendHitsPage  limit={8} isHomePage={true} showLikeButton={true}/>
                </div>
            </div>
        </>
    )
}


export default AlbumsById