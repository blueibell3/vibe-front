import Link from "next/link";
import AlbumsPage from "../../AlbumsPage/AlbumsPage";
import MusicCard from "../../MusicCard/MusicCard";
import TrendHitsPage from "../../TrendHits/TrendHits";
import styles from "./ArtistById.module.scss"


type Props = {
    id: number;
}

const ArtistById = (props: Props) => {

    return (
        <>
                <div className={styles.pageTitle}>Coldplay</div>
                <div className={styles.pageDescripton}>
                    <img className={styles.img} src='/artistidimg.svg' />
                    <span className={styles.pageTitle}>Coldplay</span>
                    <span className={styles.descriptonText}>The members of the band initially met at University College London, calling themselves Big Fat Noises and changing to Starfish, before settling on the current name. After releasing Safety (1998) independently, Coldplay signed with Parlophone in 1999 and wrote their debut album, Parachutes (2000). It featured breakthrough single "Yellow" and received a Brit Award for British Album of the Year and a Grammy Award for Best Alternative Music Album. The group's follow-up, A Rush of Blood to the Head (2002), won the same accolades. The members of the band initially met at University College London, calling themselves Big Fat Noises and changing to Starfish, before settling on the current name. After releasing Safety (1998) independently, Coldplay signed with Parlophone in 1999 and wrote their debut album, Parachutes (2000). It featured breakthrough single "Yellow" and received a Brit Award for British Album of the Year and a Grammy Award for Best Alternative Music Album. The group's follow-up, A Rush of Blood to the Head (2002), won the same accolades.</span>
                </div>
                <div className={styles.musicCards}>
                    <TrendHitsPage limit={8} />
                </div>
                <div className={styles.albumsPage}>
                    <div className={styles.albumsText}>Albums</div>
                    <AlbumsPage />
                </div>
        </>
    )
}


export default ArtistById