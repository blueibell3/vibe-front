'use client'
import TopAlbums from "@/app/Components/TopAlbums/TopAlbums"
import AuthLayout from "../layout"
import styles from "./page.module.css"
import TopCharts from "@/app/Components/TopCharts/TopCharts"

const TopChartsPage = () => {

    return (
        <>
            <div className={styles.TopChartsPageM}>
                <div className={styles.topChartsText}>Top Charts</div>
                <TopCharts isHomePage={false}  />
            </div>
        </>
    )
}

export default TopChartsPage