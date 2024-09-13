'use client'
import Image from 'next/image'
import styles from './ProfileMobile.module.scss'
import Button from '../Button/Button';

const ProfileMobile = () => {
    return (
        <div className={styles.container}>
            <div className={styles.profileContainer}>
                <div className={styles.profileText}>Profile</div>
                <div className={styles.userContainer}>
                    <Image src={'/profileuser.svg'} width={24} height={24} alt={'x'} />
                    <span className={styles.emailText}>G.sanikidze@gmail.com</span>
                </div>
            </div>
            <div className={styles.logOut} >
                <Button title={'Log out'} type={'primary'} />
            </div>
        </div>
    )
}

export default ProfileMobile