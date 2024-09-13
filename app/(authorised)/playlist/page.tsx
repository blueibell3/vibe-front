import styles from "./page.module.css"
import PlaylistPage from "@/app/Components/PlaylistPage/PlaylistPage"

const playlistPage = () => {

    return (
        <>
            <div className={styles.playlistContainer}>
                <div className={styles.playlistText}>Playlists</div>
                <PlaylistPage />
            </div>
        </>
    )
}

export default playlistPage