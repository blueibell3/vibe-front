import PlayLIstById from "@/app/Components/PlaylistPage/PlayLIstById/PlayLIstById"
import styles from './page.module.css'

const Id = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.myEveryday}>
                    <h3>My Everyday</h3>
                </div>
                <PlayLIstById url={"/playListId.svg"} />
            </div>
        </>
    )
}

export default Id