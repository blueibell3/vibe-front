
'use client'
import Image from 'next/image'
import styles from './ProfileMobile.module.scss'
import Button from '../Button/Button';
import axios from 'axios';
import { useState, useEffect } from 'react';

const ProfileMobile = () => {
    const [email, setEmail] = useState<string>('');

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = getToken();

                const response = await axios.get('https://vibe-backend-prrr.onrender.com/users/me', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });
                setEmail(response.data.email);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    const getToken = () => {
        const match = document.cookie.match(new RegExp('(^| )token=([^;]+)'));
        return match ? match[2] : '';
    };

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
                    <span className={styles.emailText}>
                        {email ? email : 'Loading...'}
                    </span>
                </div>
            </div>
            <div className={styles.logOut} onClick={handleLogOut}>
                <Button title={'Log out'} type={'primary'} />
            </div>
        </div>
    )
}

export default ProfileMobile