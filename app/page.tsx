import Image from "next/image";
import styles from './page.module.css'
import LikeButton from "./Components/LikeButton/LikeButton";
import TextButton from "./Components/TextButton/TextButton";
import Header from "./Components/Header/Header";
import MusicList from "./Components/MusicList/MusicList";
import MusicCard from "./Components/MusicCard/MusicCard";
import ArtistCard from "./Components/ArtistCard/ArtistCard";
import ChartCard from "./Components/ ChartCard/ ChartCard";
import AlbumCard from "./Components/AlbumCard/AlbumCard";
import NavBarMenu from "./Components/NavBarMenu/NavBarMenu";
import BurgerMenu from "./Components/BurgerMenu/BurgerMenu";
import MobileNavBar from "./Components/MobileNavBar/MobileNavBar";

export default function home() {

  return (
    <>
    
    <div className={styles.headerContainer}>
      <Header />
      </div>
      <div className={styles.navMenuContainer}>
        <NavBarMenu />
      </div>

      <div className={styles.menuMain}>
        <BurgerMenu />
      </div>
      <div className={styles.mobileNavBarContainer}>
        <MobileNavBar />
      </div>
    </>
  );
}