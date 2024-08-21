
import TrendHits from "../../TrendHits/TrendHits";
import styles from "./TopChartsById.module.scss"


type Props = {
    id: number;
}

const TopChartsById = (props: Props) => {

    return (
        <>
        <div className={styles.chartByIdContainer}>
            <div className={styles.hitsTitle}>Top hits in 2024</div>
            <div className={styles.trendHits}>
                <TrendHits limit={16} />
            </div>
        </div>
        </>
    )
}


export default TopChartsById