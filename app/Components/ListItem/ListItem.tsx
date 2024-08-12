import Link from 'next/link';
import styles from './ListItem.module.scss';


type Props = {
  text: string;      
  id?: number;                        
  onClick?: () => void;
  type: string;
  href: string;
  isAlbumImg?: string;
  isArtistImg?: string;
}

const ListItem = (props: Props) => {
  const isArtist = props.type === 'artist';
  const imgSrc = isArtist ? props.isArtistImg : props.isAlbumImg;

  return (
    <>
      <Link href={`/${props.type}/${props.id}`} onClick={props.onClick} className={isArtist ? styles.artistListItem : styles.playListItem}>
        <div className={isArtist ? styles.artistListGap : styles.playListGap}>
          <div className={isArtist ? styles.artistListContainer : styles.playListContainer}>
            <img className={styles.listImg} src={imgSrc} />
            <span className={styles.listText}>{props.text}</span>
          </div>
          <img src="arrowicon.svg" alt="arrow" className={styles.arrow} />
        </div>
      </Link>
    </>
  )
}
export default ListItem