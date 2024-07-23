import Link from "next/link"
import TextButton from "../TextButton/TextButton"
import styles from './SectionHeader.module.scss'
type Props = {
    title: string
    id: string
}

export default (props: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.topCharts}>
                    {props.title}
                </div>
                <Link href={props.id} className={styles.link}>
                    <div >
                        <TextButton mode="text" title={"See all"} />
                    </div>
                </Link>
            </div>
        </div>
    )
}