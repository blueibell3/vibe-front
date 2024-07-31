'use client'
import TextButton from "../TextButton/TextButton"
import styles from './SectionHeader.module.scss'
import { useRouter } from "next/navigation"
type Props = {
    title: string
    pathName: string
}

const SectionHeader = (props: Props) => {
    const router = useRouter()
   
    const handleClick = () => {
        router.push(props.pathName)
    }
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.topCharts}>
                    {props.title}
                </div>
                    <div >
                        <TextButton onClick={handleClick} mode="text" title={"See all"} />
                    </div>
            </div>
        </div>
    )
}

export default SectionHeader