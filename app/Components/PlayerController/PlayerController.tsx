'use client';
import styles from './PlayerController.module.scss';
import PreviousButton from './PreviousButton/PreviousButton';
import PlayPauseButton from './PlayPauseButton/PlayPauseButton';
import NextButton from './NextButton/NextButton';
import ShuffleButton from './ShuffleButton/ShuffleButton';
import FastForwardButton from './FastForwardButton/FastForwardButton';
import RewindButton from './RewindButton/RewindButton';
import TimeDisplay from './TimeDisplay/TimeDisplay';
import NoNFullVol from './VolumeControl/NonFullVol';

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
};

const PlayerController = (props: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.trackInfo} onClick={props.onEnterFullscreen}>
                    <img src={props.currentTrack?.photo} alt={props.currentTrack?.name} className={styles.trackPhoto} />
                    <div className={styles.trackDetails}>
                        <div className={styles.artistName}>{props.currentTrack?.artist}</div>
                        <div className={styles.trackName}>{props.currentTrack?.name}</div>
                    </div>
                </div>
                <TimeDisplay currentTime={props.currentTime} duration={props.duration} onTimeUpdate={props.onTimeUpdate} />
                <div className={styles.functionality}>
                    <div className={styles.volume}>
                        <NoNFullVol />
                    </div>
                    <PreviousButton onClick={props.onPrevious} />
                    <RewindButton onClick={props.onRewind} />
                    <PlayPauseButton onClick={props.onPlayPause} isPlaying={props.isPlaying} />
                    <FastForwardButton onClick={props.onFastForward} />
                    <NextButton onClick={props.onNext} />
                    <ShuffleButton />
                </div>
            </div>
        </div>
    );
};

export default PlayerController;