'use client'
import PopularArtist from '../Components/PopularArtist/PopularArtist';
import ReusableInput from '../Components/ReusableInput/ReusableInput';
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
        <TrendHitsCard pathName={'playlist'} />
      </div>
      <div className={styles.seactionHeader}>
        <SectionHeader title={'Popular Artists'} pathName={'/topartists'} />
      </div>
      <div className={styles.ArtistCard}>
        <PopularArtist limit={4} />
      </div>
      <div className={styles.seactionHeader}>
        <SectionHeader title={'Top Charts'} pathName={'/topCharts'} />
      </div>
      <div className={styles.topCharts}>
        <TopCharts limit={4} isHomePage={true} />
      </div>
      <div className={styles.seactionHeader}>
        <SectionHeader title={'Top Hits'} pathName={'/tophits'} />
      </div>
      <div className={styles.musicCard}>
        <TrendHits limit={4} showLikeButton={true} />
      </div>
      <div className={styles.seactionHeader}>
        <SectionHeader title={'Top Albums'} pathName={'/topalbums'} />
      </div>
      <div className={styles.topAlbums}>
        <TopAlbums limit={4} />
      </div>
    </div>
);
}

