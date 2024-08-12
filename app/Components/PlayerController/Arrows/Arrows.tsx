'use client'
import styles from './Arrows.module.scss'
type Props = {
    onClick?: () => void
    isUp: boolean
}
const Arrows = (props: Props) => {
    return (
        <div className={styles.container} onClick={props.onClick}>
            <img src={props.isUp ? '/icons/topArrow.svg' : '/icons/downArrow.svg'}
                alt={props.isUp ? 'arrow down' : 'arrow up'}
            />
        </div>
    )
}

export default Arrows