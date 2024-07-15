'use client'
import { useState } from 'react'
import styles from './UserAvatar.module.scss'
import Image from 'next/image'

type Props = {
    gmail: string
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
                    <div className={styles.wrapper} onClick={onChange}>
                        <div className={styles.userWindow} >
                            {props.gmail}
                            <div className={styles.longOut}>
                                <img src='/longout icoon.svg' alt='long out button' width={24} height={24} />
                                <span>Log out</span>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}