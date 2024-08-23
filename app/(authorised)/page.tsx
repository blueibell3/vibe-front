'use client'
import PopularArtist from '../Components/PopularArtist/PopularArtist';
import SectionHeader from '../Components/SectionHeader/SectionHeader';
import TopAlbums from '../Components/TopAlbums/TopAlbums';
import TopCharts from '../Components/TopCharts/TopCharts';
import TrendHits from '../Components/TrendHits/TrendHits';
import TrendHitsCard from '../Components/TrendHitsCard/TrendHitsCard';
import styles from './page.module.css';


export default function Home() {
  return (

    <div className={styles.container}>
      <div className={styles.TrendHitsCard}>
        <TrendHitsCard pathName={'sasd'} />
      </div>
      <div className={styles.seactionHeader}>
        <SectionHeader title={'Popular Artists'} pathName={'/'} />
      </div>
      <div className={styles.ArtistCard}>
        <PopularArtist />
      </div>
      <div className={styles.seactionHeader}>
        <SectionHeader title={'Top Charts'} pathName={'/topCharts'} />
      </div>
      <div className={styles.topCharts}>
        <TopCharts limit={4} />
      </div>
      <div className={styles.seactionHeader}>
        <SectionHeader title={'Top Hits'} pathName={'/topHits'} />
      </div>
      <div className={styles.musicCard}>
        <TrendHits limit={4} />
      </div>
      <div className={styles.seactionHeader}>
        <SectionHeader title={'Top Alboms'} pathName={'/'} />
      </div>
      <div className={styles.topAlbums}>
        <TopAlbums limit={4} />
      </div>
    </div>
  );
}

