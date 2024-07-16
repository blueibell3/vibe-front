import Link from "next/link"
import TextButton from "../TextButton/TextButton"
import styles from './SectionHeader.module.scss'
type Props = {
    text: string
    id: string
}

export default (props: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Link href={props.id} className={styles.link}>
                    <div className={styles.topCharts}>
                        {props.text}
                    </div>
                </Link>
                <div >
                    <TextButton mode="text" title={"See all"} />
                </div>
            </div>
        </div>
    )
}