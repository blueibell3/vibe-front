import MusicCard from '../../MusicCard/MusicCard'
import styles from './PlayLIstById.module.scss'


const PlayLIstById = () => {
    const musicData = [
        {
            id: 1,
            songName: 'Lose yourself',
            artistName: 'Eminem',
            imgUrl: '/Eminem.jpg'
        },
        {
            id: 2,
            songName: 'Lose yourself',
            artistName: 'Eminem',
            imgUrl: '/Eminem.jpg'
        },
        {
            id: 3,
            songName: 'Lose yourself',
            artistName: 'Eminem',
            imgUrl: '/Eminem.jpg'
        },

        {
            id: 4,
            songName: 'Lose yourself',
            artistName: 'Eminem',
            imgUrl: '/Eminem.jpg'
        },
    ]

    return (
        <div className={styles.wrap}>
            <div className={styles.myEveryday}>
                <h3>My Everyday</h3>
            </div>
            <div className={styles.everyDay}>
                <img src={"/playListId.svg"} alt="my every day" />
                <span>my Everyday</span>
            </div>
            <div className={styles.musicData}>
                {musicData.map((music,) => (
                    <MusicCard
                        imageUrl={music.imgUrl}
                        songName={music.songName}
                        artistName={music.artistName}
                        trackIndex={4}
                        showLikeButton={false}
                        key={music.id}
                    />
                ))}
            </div>
        </div>
    )
}

export default PlayLIstById