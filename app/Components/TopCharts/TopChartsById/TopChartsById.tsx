import TrendHits from "../../TrendHits/TrendHits";
import styles from "./TopChartsById.module.scss"

const TopChartsById = () => {

    return (
        <>
            <div className={styles.chartByIdContainer}>
                <div className={styles.hitsTitle}>Top charts</div>
                <div className={styles.trendHits}>
                    <TrendHits limit={16}  showLikeButton={true} />
                </div>
            </div>
        </>
    )
}


export default TopChartsById