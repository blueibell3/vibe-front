import TrendHits from "../../TrendHits/TrendHits"
import styles from './PlayLIstById.module.scss'


const PlayLIstById = () => {
    return(
        <div className={styles.container}>
            <TrendHits limit={8} isHomePage={false}/>
        </div>
    )
}

export default PlayLIstById