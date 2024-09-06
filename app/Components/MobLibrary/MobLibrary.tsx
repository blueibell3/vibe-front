import styles from './MobLibrary.module.scss'

const libraryList = [
    {
        id: 1,
        text: 'Artist',
        href: "/artist",
        src: "/artist.svg"
    },
    {
        id: 2,
        text: 'Playlist',
        href: '/playlist',
        src: "/playlist.svg"

    },

    {
        id: 3,
        text: 'Albums',
        href: '/albums',
        src: './albums.svg'
    }
]

const MobLibrary = () => {

    return (
        <div className={styles.container}>
            <h3>Library</h3>
            {libraryList.map((library) => (
                <a className={styles.libraryList}
                    key={library.id}
                    href={library.href}
                >
                    <img src={library.src} alt="/" />
                    <span>{library.text}</span>
                </a>
            ))}
        </div>
    )
}

export default MobLibrary