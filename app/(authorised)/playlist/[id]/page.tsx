import PlayLIstById from "@/app/Components/PlaylistPage/PlayLIstById/PlayLIstById"
import styles from './page.module.css'

const Id = () => {
    return (
        <>
            <div className={styles.container}>
                <PlayLIstById url={"/playListId.svg"} />
            </div>
        </>
    )
}

export default Id