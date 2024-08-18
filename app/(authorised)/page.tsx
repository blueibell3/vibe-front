'use client'
import ChartCard from '../Components/ ChartCard/ ChartCard';
import ArtistCard from '../Components/ArtistCard/ArtistCard';
import Header from '../Components/Header/Header';
import MusicList from '../Components/MusicList/MusicList';
import Test from '../Components/MusicList/Tests';
import FullscreenPlayer from '../Components/PlayerController/FullscreenPlayer/FullscreenPlayer';
import MusicPlayer from '../Components/PlayerController/MusicPlayer/MusicPlayer';
import PlayerController from '../Components/PlayerController/PlayerController';
import SectionHeader from '../Components/SectionHeader/SectionHeader';
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
        <ArtistCard title={'Coldplay'} year={1990} url='/COldplay.svg' />
        <ArtistCard title={'Coldplay'} year={1990} url='/COldplay.svg' />
        <ArtistCard title={'Coldplay'} year={1990} url='/COldplay.svg' />
        <ArtistCard title={'Coldplay  '} year={1990} url='/COldplay.svg' />

      </div>
    </div>
  );
}

