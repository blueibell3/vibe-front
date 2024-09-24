import Link from 'next/link';
import styles from './ListItem.module.scss';


type Props = {
  name: string;
  imgSrc?: string;
  isArtist: boolean;
  id: number;
  link: string;
}

const ListItem = (props: Props) => {

  return (
    <>
      <Link href={props.link} className={styles.artistListItem}>
        <div className={styles.artistListGap}>
          <div className={styles.artistListContainer}>
            <img className={styles.listImg} src={props.imgSrc} />
            <span className={styles.listText}>{props.name}</span>
          </div>
          <img src="arrowicon.svg" alt="arrow" className={styles.arrow} />
        </div>
      </Link>
    </>
  )
}
export default ListItem