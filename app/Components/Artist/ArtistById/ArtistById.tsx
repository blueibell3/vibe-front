import Albums from "../../Albums/Albums";
import MusicCard from "../../MusicCard/MusicCard";
import TrendHitsPage from "../../TrendHits/TrendHits";
import styles from "./ArtistById.module.scss";

const ArtistById = () => {
    const artistMusic = [
        {
            id: 1,
            songName: 'Help me',
            artistName: 'Katana',
            imgUrl: '/katana.jpg'
        },
        {
            id: 2,
            songName: 'Help me',
            artistName: 'Katana',
            imgUrl: '/katana.jpg'
        },
        {
            id: 3,
            songName: 'Help me',
            artistName: 'Katana',
            imgUrl: '/katana.jpg'
        },

        {
            id: 4,
            songName: 'Help me',
            artistName: 'Katana',
            imgUrl: '/katana.jpg'
        },
        {
            id: 5,
            songName: 'Help me',
            artistName: 'Katana',
            imgUrl: '/katana.jpg'
        },

        {
            id: 6,
            songName: 'Help me',
            artistName: 'Katana',
            imgUrl: '/katana.jpg'
        },
    ]
    return (
        <>
            <div className={styles.container}>
                <div className={styles.pageTitle}>Coldplay</div>
                <div className={styles.pageDescripton}>
                    <img className={styles.img} src='/artistidimg.svg' alt="Artist Coldplay" />
                    <span className={styles.pageTitle}>Coldplay</span>
                    <span className={styles.descriptonText}>
                        Coldplay&nbsp;are a British&nbsp;rock&nbsp;band formed in&nbsp;London&nbsp;in 1997,
                        consisting of vocalist and pianist&nbsp;Chris Martin, lead guitarist&nbsp;Jonny Buckland,
                        bassist&nbsp;Guy Berryman, drummer and percussionist&nbsp;Will Champion, and manager&nbsp;Phil Harvey.
                        They are best known for&nbsp;their live performances, having also&nbsp;impacted popular culture&nbsp;with&nbsp;their artistry,
                        advocacy&nbsp;and&nbsp;achievements.
                    </span>
                    <span className={styles.descriptonText}>
                        The members of the band initially met at&nbsp;University College London, calling themselves Big Fat Noises and changing to Starfish,
                        before settling on the current name. After releasing&nbsp;<i>Safety</i>&nbsp;(1998) independently, Coldplay signed with&nbsp;Parlophone&nbsp;in 1999
                        and wrote their debut album,&nbsp;<i>Parachutes</i>&nbsp;(2000). It featured breakthrough single &quot;Yellow&quot; and received a&nbsp;Brit Award for British Album of the Year&nbsp;
                        and a&nbsp;Grammy Award for Best Alternative Music Album. The group&apos;s follow-up,&nbsp;<i>A Rush of Blood to the Head</i>&nbsp;(2002), won the same accolades.
                    </span>
                </div>
                <div className={styles.musicCards}>
                    {artistMusic.map((music) => (
                        <MusicCard
                            imageUrl={music.imgUrl}
                            songName={music.songName}
                            artistName={music.artistName}
                            trackIndex={1}
                            showLikeButton={true}
                            key={music.id}
                        />
                    ))}
                </div>
                <div className={styles.albumsPage}>
                    <div className={styles.albumsText}>Albums</div>
                    <Albums limit={4} />
                </div>
            </div>
        </>
    );
};

export default ArtistById;
