import TrendHits from "@/app/Components/TrendHits/TrendHits"
import styles from "./page.module.css"




const trendHits = () => {

    return (
        <>
            <div className={styles.trendHits}>
                <div className={styles.trendHitsText}>Trend Hits</div>
                <TrendHits limit={16}  />
            </div>
        </>
    )
}

export default trendHits