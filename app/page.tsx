import Image from "next/image";
import styles from './page.module.css'
import LikeButton from "./Components/LikeButton/LikeButton";
import TextButton from "./Components/TextButton/TextButton";
import MusicCard from "./Components/MusicCard/MusicCard";


export default function home() {
  return (
    <>
      <div>
        <MusicCard
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/1/1f/Compact_disc_album.jpg"
          songName="Yellow"
          artistName="The Beatles"
          audioPlay='/Group.svg'
        />
      </div>
      <LikeButton/>
    </>
  );
}