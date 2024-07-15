import Image from "next/image";
import styles from './page.module.css'
import LikeButton from "./Components/LikeButton/LikeButton";
import TextButton from "./Components/TextButton/TextButton";
import MusicList from "./Components/MusicList/MusicList";
import MusicCard from "./Components/MusicCard/MusicCard";
import ArtistCard from "./Components/ArtistCard/ArtistCard";


export default function home() {

  const handlePlay = () => {
    console.log('Playing song');
  };

  return (
    <div className= {styles.container}>
    </div>


  );
}