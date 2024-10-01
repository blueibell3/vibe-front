import styles from './DesktopVolume.module.scss';
import { mutedState, volumeState } from '@/app/state';
import { useRecoilState } from 'recoil';
import VolumeInput from './VolumeInput/VolumeInput';

interface Props {
    width: number;
    volumeWidth: number;
    volumeHeight: number;
    involved: string;
}

const DesktopVolume = (props: Props) => {
    const [muted, setMuted] = useRecoilState(mutedState);
    const [, setVolume] = useRecoilState(volumeState);

    const mutedFunc = () => {
        if (muted) {
            setMuted(false);
            setVolume(50);
        } else {
            setMuted(true);
            setVolume(0);
        }
    };

    const volumeWidth = {
        width: `${props.volumeWidth}px`,
        height: `${props.volumeHeight}px`,
    };

    const involved = {
        display: `${props.involved}`,
    };

    return (
        <div className={styles.volumeContainer}>
            <div className={styles.volume}>
                {muted ? (
                    <img
                        className={styles.Muted}
                        src="/allFolders/PlayerControler/Muted.svg"
                        onClick={mutedFunc}
                        style={volumeWidth}
                        alt="Muted"
                    />
                ) : (
                    <img
                        className={styles.Volume}
                        src="/allFolders/PlayerControler/Volume.svg"
                        style={volumeWidth}
                        onClick={mutedFunc}
                        alt="Volume"
                    />
                )}
                <VolumeInput width={props.width} />
                <img
                    className={styles.Involved}
                    src="/allFolders/PlayerControler/involved.svg"
                    style={involved}
                    alt="img"
                />
            </div>
        </div>
    );
};

export default DesktopVolume;
