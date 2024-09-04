import TrendHits from "../../TrendHits/TrendHits"
import styles from './PlayLIstById.module.scss'

type Props = {
    url: string
}

const PlayLIstById = (props: Props) => {
    return (
        <div className={styles.wrap}>
            <div className={styles.everyDay}>
                <img src={props.url} alt="my every day" />
                <span>my Everyday</span>
            </div>
            <div className={styles.container}>
                <TrendHits limit={8} isHomePage={false} showLikeButton={false} />
            </div>
        </div>
    )
}

export default PlayLIstById