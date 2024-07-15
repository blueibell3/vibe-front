import Image from "next/image";
import styles from './page.module.css'
import LikeButton from "./Components/LikeButton/LikeButton";
import TextButton from "./Components/TextButton/TextButton";
import MusicCard from "./Components/MusicCard/MusicCard";


export default function home() {
  return (
    <>
  <MusicCard
   imageUrl={"https://marketplace.canva.com/EAFy2GgsPAo/2/0/1600w/canva-red-minimalist-creative-man-without-head-album-cover-_bB_o4a7jdE.jpg"} 
   songName={"Yellow"} 
   artistName={"Coldplay"}  />
    </>
  );
}