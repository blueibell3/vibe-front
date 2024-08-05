import TopAlbums from "@/app/Components/TopAlbums/TopAlbums"
import AuthLayout from "../layout"
import styles from "./page.module.scss"



const TopAlbumsPage = () => {

    return (
        <>
            <div className={styles.TopAlbumsPageM}>
                <div className={styles.topAlbumsText}>Top Albums</div>
                <TopAlbums />
            </div>
        </>
    )
}

export default TopAlbumsPage
