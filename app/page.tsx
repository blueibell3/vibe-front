import Image from "next/image";
import styles from './page.module.css'
import LikeButton from "./Components/LikeButton/LikeButton";
import TextButton from "./Components/TextButton/TextButton";
import MusicList from "./Components/MusicList/MusicList";

export default function home() {

  const handlePlay = () => {
    console.log('Playing song');
  };

  return (
    <MusicList 
    imageUrl={""} 
    songName={""}
     artistName={""}
     time={""} 
     onPlay={handlePlay}
     />
  );
}

