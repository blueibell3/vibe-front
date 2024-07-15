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
    <div className={styles.container}>
    <MusicList
       imageUrl="https://daprintfactory.com/cdn/shop/files/music-cds-music-covers-print-1.png?v=1690954711"
       songName="Unwritten"
       artistName="Natasha Bedingfield"
       time="4:11"
       onPlay={handlePlay}
     />
     <MusicList
       imageUrl="https://daprintfactory.com/cdn/shop/files/music-cds-music-covers-print-1.png?v=1690954711"
       songName="Unwritten"
       artistName="Natasha Bedingfield"
       time="4:11"
       onPlay={handlePlay}
     />
     <MusicList
       imageUrl="https://daprintfactory.com/cdn/shop/files/music-cds-music-covers-print-1.png?v=1690954711"
       songName="Unwritten"
       artistName="Natasha Bedingfield"
       time="4:11"
       onPlay={handlePlay}
     />
     <MusicList
       imageUrl="https://daprintfactory.com/cdn/shop/files/music-cds-music-covers-print-1.png?v=1690954711"
       songName="Unwritten"
       artistName="Natasha Bedingfield"
       time="4:11"
       onPlay={handlePlay}
     />
     <MusicList
       imageUrl="https://daprintfactory.com/cdn/shop/files/music-cds-music-covers-print-1.png?v=1690954711"
       songName="Unwritten"
       artistName="Natasha Bedingfield"
       time="4:11"
       onPlay={handlePlay}
     />
     <MusicList
       imageUrl="https://daprintfactory.com/cdn/shop/files/music-cds-music-covers-print-1.png?v=1690954711"
       songName="Unwritten"
       artistName="Natasha Bedingfield"
       time="4:11"
       onPlay={handlePlay}
     />
     <MusicList
       imageUrl="https://daprintfactory.com/cdn/shop/files/music-cds-music-covers-print-1.png?v=1690954711"
       songName="Unwritten"
       artistName="Natasha Bedingfield"
       time="4:11"
       onPlay={handlePlay}
     />
     <MusicList
       imageUrl="https://daprintfactory.com/cdn/shop/files/music-cds-music-covers-print-1.png?v=1690954711"
       songName="Unwritten"
       artistName="Natasha Bedingfield"
       time="4:11"
       onPlay={handlePlay}
     />
     
    </div>
  );
}

