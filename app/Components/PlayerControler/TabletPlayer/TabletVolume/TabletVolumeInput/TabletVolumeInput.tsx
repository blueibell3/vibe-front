import { useRecoilState } from 'recoil';
import styles from './TabletVolumeInput.module.scss';
import { mutedState, volumeState } from '@/app/state';

interface Props {
    tabletWidth: number;
}

const TabletVolumeInput = (props: Props) => {
    const [volume, setVolume] = useRecoilState(volumeState);
    const [muted] = useRecoilState(mutedState);

    const TabletVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
    };

    const progressPercent = volume;
    const trackStyle = {
        background: `linear-gradient(to right, #5E4BE2 ${progressPercent}%, #292929 ${progressPercent}%)`,
        height: 'var(--borderRadius, 4px)',
        width: `${props.tabletWidth}px`,
    };

    return (
        <input
            type="range"
            min={0}
            max={100}
            value={muted ? 0 : volume}
            onChange={TabletVolumeChange}
            className={styles.volumeRange}
            style={trackStyle}
        />
    );
};

export default TabletVolumeInput;
