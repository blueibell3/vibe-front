'use client'
import { useState } from 'react'
import styles from './UserAvatar.module.scss'
import Image from 'next/image'

type Props = {
    url?: string;
    text: string
}

export default (props: Props) => {
    const [userIn, setUserIn] = useState(false)
    const onChange = () => {
        setUserIn(!userIn)
    }
    return (
        <>
        <div className={styles.container}>
            <Image src='/user avatar.svg' onClick={onChange} width={32} height={32} alt='user avatar' className={styles.userAvatar} />
            {userIn &&

                <div className={styles.userWindow}>
                    <img src={props.url} alt='longout button' width={24} height={24} />
                    {props.text}
                </div>}
        </div>
        <div className={styles.burgerMenu}>
                <img src="/menu-burger.svg" alt="burger menu" width={44.02} height={44.02} />
            </div>
            </>
    )
}