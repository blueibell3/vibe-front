'use client'
import { useState } from 'react'
import styles from './UserAvatar.module.scss'
import Image from 'next/image'

export default () => {
    const [userIn, setUserIn] = useState(false)
    const onChange = () => {
        setUserIn(!userIn)
    }
    return (
        <div className={ styles.container}>
            <Image src='/user avatar.svg' onClick={onChange} width={32} height={32} alt='user avatar' />
            {
                userIn &&
                <div className={styles.userWindow}>
                    <span>sdsadd</span>
                </div>
            }
        </div>
    )
}