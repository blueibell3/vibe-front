import Image from "next/image";
import styles from './page.module.css'
import LikeButton from "./Components/LikeButton/LikeButton";
import TextButton from "./Components/TextButton/TextButton";
import MusicList from "./Components/MusicList/MusicList";
import MusicCard from "./Components/MusicCard/MusicCard";
import ArtistCard from "./Components/ArtistCard/ArtistCard";
import ChartCard from "./Components/ ChartCard/ ChartCard";


export default function home() {


  return (
   <>
    <div className={styles.chartCardContainer}>
    <ChartCard
      title='top hits 2024'
      id={1}
      imageUrl='https://media.architecturaldigest.com/photos/5890e88033bd1de9129eab0a/1:1/w_870,h_870,c_limit/Artist-Designed%20Album%20Covers%202.jpg'
    />
     <ChartCard
      title='top hits 2024'
      id={2}
      imageUrl='https://media.architecturaldigest.com/photos/5890e88033bd1de9129eab0a/1:1/w_870,h_870,c_limit/Artist-Designed%20Album%20Covers%202.jpg'
    />
     <ChartCard
      title='top hits 2024'
      id={3}
      imageUrl='https://media.architecturaldigest.com/photos/5890e88033bd1de9129eab0a/1:1/w_870,h_870,c_limit/Artist-Designed%20Album%20Covers%202.jpg'
    />
     <ChartCard
      title='top hits 2024'
      id={4}
      imageUrl='https://media.architecturaldigest.com/photos/5890e88033bd1de9129eab0a/1:1/w_870,h_870,c_limit/Artist-Designed%20Album%20Covers%202.jpg'
    />
    </div>
   </>

  );
}