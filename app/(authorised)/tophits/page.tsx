import TopHits from '@/app/Components/TopHIts/TopHits'
import styles from './page.module.css'

const tophits = () => {
    return (
        <div className={styles.conteiner}>
            <div className={styles.topHits}>
                <h3>Top hits</h3>
            </div>
            <div className={styles.top}>
                <TopHits showLikeButton={true} />
            </div>


        </div>
    )
}

export default tophits