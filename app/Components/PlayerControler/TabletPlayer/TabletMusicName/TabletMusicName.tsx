import { globalImageState, indexState } from '@/app/state';
import styles from './TabletMusicName.module.scss';
import TabletName from './TabletName/TabletName';
import { useRecoilState } from 'recoil';

const TabletMusicName = () => {
    const [image] = useRecoilState(globalImageState);
    const [index] = useRecoilState(indexState);
    return (
        <div className={styles.tabletMusicName}>
            <img
                className={styles.image}
                src={
                    image[index]
                        ? image[index]
                        : '/allFolders/images/playerDefault.png'
                }
                alt="photo"
            />
            <TabletName />
        </div>
    );
};

export default TabletMusicName;
