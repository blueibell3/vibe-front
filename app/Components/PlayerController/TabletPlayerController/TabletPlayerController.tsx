'use client';
import styles from './TabletPlayerController.module.scss';
import PreviousButton from '../PreviousButton/PreviousButton';
import PlayPauseButton from '../PlayPauseButton/PlayPauseButton';
import NextButton from '../NextButton/NextButton';
import ShuffleButton from '../ShuffleButton/ShuffleButton';
import FastForwardButton from '../FastForwardButton/FastForwardButton';
import RewindButton from '../RewindButton/RewindButton';
import TimeDisplay from '../TimeDisplay/TimeDisplay';
import NoNFullVol from '../VolumeControl/NonFullVol';

type Props = {
    currentTrack: any;
    currentTime: number;
    duration: number;
    isPlaying: boolean;
    onPlayPause: () => void;
    onPrevious: () => void;
    onNext: () => void;
    onFastForward: () => void;
    onRewind: () => void;
    onTimeUpdate: (time: number) => void;
    onEnterFullscreen: () => void;
}
const TabletPlayerController = (props: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.trackInfo}>
                <img src={props.currentTrack?.photo.url} alt={props.currentTrack?.name} className={styles.trackPhoto} onClick={props.onEnterFullscreen} />
                <div className={styles.trackDetails}>
                    <div className={styles.trackName}>{props.currentTrack?.name}</div>
                    <div className={styles.artistName}>{props.currentTrack?.artist}</div>
                </div>
            </div>
            <div className={styles.TimeDisplay}>
                <div className={styles.display}>
                    <TimeDisplay currentTime={props.currentTime} duration={props.duration} onTimeUpdate={props.onTimeUpdate} />
                </div>

                <div className={styles.functionality}>
                    <div className={styles.volume}>
                        <NoNFullVol />
                    </div>
                    <div className={styles.buttons}>
                        <PreviousButton onClick={props.onPrevious} />
                        <RewindButton onClick={props.onRewind} />
                        <PlayPauseButton onClick={props.onPlayPause} isPlaying={props.isPlaying} />
                        <FastForwardButton onClick={props.onFastForward} />
                        <NextButton onClick={props.onNext} />
                    </div>
                    <div className={styles.shuffle}>

                        <ShuffleButton />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabletPlayerController;