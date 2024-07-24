import TextButton from "../TextButton/TextButton"
import styles from './SectionHeader.module.scss'
type Props = {
    title: string
    id: string
}

const SectionHeader = (props: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.topCharts}>
                    {props.title}
                </div>
                    <div >
                        <TextButton mode="text" title={"See all"} />
                    </div>
            </div>
        </div>
    )
}

export default SectionHeader