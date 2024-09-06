import styles from './MobLibrary.module.scss'

const MobLibrary = () => {
    return (
        <div className={styles.container}>
            <h3>Library</h3>
            <a href="/artist" className={styles.libraryList}>
                <img src="/artist.svg" alt="artisicon" />
                <span>Artist</span>
            </a>
            <a href='/playlist' className={styles.libraryList}>
                <img src="/playlist.svg" alt="artisicon" />
                <span>Playlist</span>
            </a>
            <a href='/albums' className={styles.libraryList}>
                <img src="/albums.svg" alt="artisicon" />
                <span>Albums</span>
            </a>
        </div>
    )
}

export default MobLibrary