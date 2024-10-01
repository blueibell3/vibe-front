import { useRecoilState } from 'recoil';
import styles from './DesktopRightTwist.module.scss';
import { shouldAddTimeState } from '@/app/state';

const DesktopRightTwist = () => {
    const [, setShouldAddTime] = useRecoilState(shouldAddTimeState);
    return (
        <img
            className={styles.RightTwist}
            src="/icons/next.svg"
            alt="Right Twist"
            onClick={() => setShouldAddTime(true)}
        />
    );
};

export default DesktopRightTwist;
