
'use client'
import Image from 'next/image'
import styles from './ProfileMobile.module.scss'
import Button from '../Button/Button';

const ProfileMobile = () => {
    const handleLogOut = () => {
        document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        window.location.reload();
    };

    return (
        <div className={styles.container}>
            <div className={styles.profileContainer}>
                <div className={styles.profileText}>Profile</div>
                <div className={styles.userContainer}>
                    <Image src={'/profileuser.svg'} width={24} height={24} alt={'x'} />
                    <span className={styles.emailText}>G.sanikidze@gmail.com</span>
                </div>
            </div>
            <div className={styles.logOut} onClick={handleLogOut}>
                <Button title={'Log out'} type={'primary'} />
            </div>
        </div>
    )
}

export default ProfileMobile