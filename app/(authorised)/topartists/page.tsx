import TopArtists from "@/app/Components/TopArtists/TopArtists"
import styles from "./page.module.css"
import ArtistPage from "@/app/Components/ArtistPage/ArtistPage"
import React from "react"



const TopArtistPage = () => {

    return (
        <>
            <div className={styles.topArtistsContainer}>
                <div className={styles.topArtistText}> Top Artist</div>
                <TopArtists />
            </div>
        </>
    )
}

export default TopArtistPage