import { useRecoilState } from 'recoil';
import styles from './TabeltVolume.module.scss';
import TabletVolumeInput from './TabletVolumeInput/TabletVolumeInput';
import { mutedState } from '@/app/state';

interface Props {
    tabletWidth: number;
    tabletInvolved: string;
    tabletVolumeWidth: number;
    tabletVolumeHeight: number;
}

const TabeltVolume = (props: Props) => {
    const [muted, setMuted] = useRecoilState(mutedState);

    const mutedFunc = () => {
        setMuted(!muted);
    };
    const tabletInvolved = {
        display: `${props.tabletInvolved}`,
    };

    const tabletVolumeWidth = {
        width: `${props.tabletVolumeWidth}px`,
        height: `${props.tabletVolumeHeight}px`,
    };
    return (
        <div className={styles.volumeContainer}>
            <div className={styles.volume}>
                {muted ? (
                    <img
                        src="/allFolders/PlayerControler/Muted.svg"
                        onClick={mutedFunc}
                        style={tabletVolumeWidth}
                        alt="Muted"
                    />
                ) : (
                    <img
                        src="/allFolders/PlayerControler/Volume.svg"
                        style={tabletVolumeWidth}
                        onClick={mutedFunc}
                        alt="Volume"
                    />
                )}
                <TabletVolumeInput tabletWidth={props.tabletWidth} />
                <img
                    src="/allFolders/PlayerControler/involved.svg"
                    style={tabletInvolved}
                    alt="involved"
                />
            </div>
        </div>
    );
};

export default TabeltVolume;
