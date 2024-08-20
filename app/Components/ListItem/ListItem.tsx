import Link from 'next/link';
import styles from './ListItem.module.scss';


type Props = {
  text: string;
  imgSrc: string;
  isArtist: boolean;
  id: number;
  link: string;
}

const ListItem = (props: Props) => {

  return (
    <>
      <Link href={props.link} className={props.isArtist ? styles.artistListItem : styles.playListItem}>
        <div className={props.isArtist ? styles.artistListGap : styles.playListGap}>
          <div className={props.isArtist ? styles.artistListContainer : styles.playListContainer}>
            <img className={styles.listImg} src={props.imgSrc} />
            <span className={styles.listText}>{props.text}</span>
          </div>
          <img src="arrowicon.svg" alt="arrow" className={styles.arrow} />
        </div>
      </Link>
    </>
  )
}
export default ListItem