import TopAlbums from "@/app/Components/TopAlbums/TopAlbums"
import AuthLayout from "../layout"
import styles from "./page.module.css"
import TopCharts from "@/app/Components/TopCharts/TopCharts"
import ArtistPage from "@/app/Components/ArtistPage/ArtistPage"



const artistPage = () => {

    return (
        <>
            <div className={styles.artistContainer}>
                <div className={styles.artistText}>Artist</div>
                <ArtistPage />
            </div>
        </>
    )
}

export default artistPage