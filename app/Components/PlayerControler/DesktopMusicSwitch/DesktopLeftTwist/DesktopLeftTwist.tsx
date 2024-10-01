import { shouldRewindState } from '@/app/state';
import styles from './DesktopLeftTwist.module.scss';
import { useRecoilState } from 'recoil';

const DesktopLeftTwist = () => {
    const [, setShouldRewind] = useRecoilState(shouldRewindState);

    return (
        <img
            className={styles.LeftTwist}
            src="/allFolders/PlayerControler/LeftTwist.svg"
            alt="Left Twist"
            onClick={() => setShouldRewind(true)}
        />
    );
};

export default DesktopLeftTwist;
