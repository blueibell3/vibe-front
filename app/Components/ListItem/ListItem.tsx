import Link from 'next/link';
import styles from './ListItem.module.scss';
import EditPlaylist from '../EditPlaylist/EditPlaylist';



type Props = {
  name: string;
  imgSrc?: string;
  lastName?: string
  isArtist: boolean;
  id: number;
  link: string;
}

const ListItem = (props: Props) => {



  return (
    <>
      <div className={styles.artistListItem}>
        <div className={styles.artistListGap}>
          <Link href={props.link}>
            <div className={styles.artistListContainer}>
              <img className={styles.listImg} src={props.imgSrc} />
              <div className={styles.namesGap} >
                <span className={styles.listText}>{props.name}</span>
                <span className={styles.listText}>{props.lastName}</span>
              </div>
            </div>
          </Link>

        </div>
        <div className={styles.listItemEdit}>
          <EditPlaylist playlistId={props.id} />
          <img src="arrowicon.svg" alt="arrow" className={styles.arrow} />
        </div>
      </div>
    </>
  )
}
export default ListItem;
