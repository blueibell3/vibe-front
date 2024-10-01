import styles from './DesktopMusicSwitch.module.scss';
import { useRecoilState } from 'recoil';
import { isPlayingState } from '@/app/state';
import LeftSwitch from './LeftSwitch/LeftSwitch';
import RightSwitch from './RightSwitch/RightSwitch';
import DesktopRightTwist from './DesktopRightTwist/DesktopRightTwist';
import DesktopLeftTwist from './DesktopLeftTwist/DesktopLeftTwist';

const DesktopMusicSwitch = () => {
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);

    const playPause = () => {
        setIsPlaying(!isPlaying);
    };
    return (
        <div className={styles.musicSwitch}>
            <LeftSwitch />
            <DesktopLeftTwist />
            <div className={styles.playPaus} onClick={playPause}>
                {isPlaying ? (
                    <img
                        src="/allFolders/PlayerControler/Play.svg"
                        alt="Play"
                        className={styles.play}
                    />
                ) : (
                    <img
                        src="/allFolders/PlayerControler/Pause.svg"
                        alt="Pause"
                        className={styles.pause}
                    />
                )}
            </div>
            <DesktopRightTwist />
            <RightSwitch />
        </div>
    );
};

export default DesktopMusicSwitch;
