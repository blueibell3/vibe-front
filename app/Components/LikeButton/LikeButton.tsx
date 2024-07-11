'use client'
import Image from "next/image"
import { useState } from "react";
import styles from './LikeButton.module.scss'

export default () => {
    const [isLiked, setIsLiked] = useState(true)

    const hanldeClick = () => {
        setIsLiked(!isLiked)
    }

    return (
        <div>
            <button onClick={hanldeClick} className={styles.button}>
                { <Image src={isLiked?'/likeOff.svg':'/likeOn.svg'} alt="like" width={24} height={24} /> }
            </button>


        </div>
    )
}