import Image from "next/image";
import styles from './page.module.css'
import LikeButton from "./Components/LikeButton/LikeButton";
import TextButton from "./Components/TextButton/TextButton";
import Header from "./Components/Header/Header";
import MusicList from "./Components/MusicList/MusicList";
import MusicCard from "./Components/MusicCard/MusicCard";
import ArtistCard from "./Components/ArtistCard/ArtistCard";
import TrendHitsCard from "./Components/TrendHitsCard/TrendHitsCard";

export default function home() {

  return (
    <div className={styles.container}>
      <TrendHitsCard pathName={"/full playlist"}  />
    </div>


  );
}