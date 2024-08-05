import MusicList from '../Components/MusicList/MusicList';
import FullscreenPlayer from '../Components/PlayerController/FullscreenPlayer/FullscreenPlayer';
import MusicPlayer from '../Components/PlayerController/MusicPlayer/MusicPlayer';
import PlayerController from '../Components/PlayerController/PlayerController';
import styles from './page.module.css';

type Props = {
  duration: number
}
export default function Home(props: Props) {
  props.duration
  return (

    <div>
      <MusicList imageUrl={'/believer.svg'} songName={'beliver'} artistName={'imagineDragon'} 
        time={props.duration} />
      <MusicPlayer />
    </div>
  );
}