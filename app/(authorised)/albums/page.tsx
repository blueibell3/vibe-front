
import styles from "./page.module.css"
import AlbumsPage from "@/app/Components/AlbumsPage/AlbumsPage"



const albumsPage = () => {

    return (
        <>
            <div className={styles.albumsPageM}>
                <div className={styles.albumsText}>Albums</div>
                <AlbumsPage />
            </div>
        </>
    )
}

export default albumsPage