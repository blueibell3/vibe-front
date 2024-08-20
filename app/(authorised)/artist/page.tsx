
import styles from "./page.module.css"
import Artist from "@/app/Components/Artist/Artist"


const artist = () => {

    return (
        <>
            <div className={styles.artistContainer}>
                <div className={styles.artistText}>Artist</div>
                <Artist />
            </div>
        </>
    )
}

export default artist