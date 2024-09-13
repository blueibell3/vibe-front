'use client';
import { useState } from 'react';
import styles from './UserAvatar.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type Props = {
    gmail: string;
};

const UserAvatar = (props: Props) => {
    const [userIn, setUserIn] = useState(false);
    
    const onClick = () => {
        setUserIn(!userIn);
    };
    
    const router = useRouter();
    const handleLogOut = () => {
        // Delete the token from cookies
        document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

        // Refresh the page to reflect the logout state
        window.location.reload();
    };

    return (
        <>
            <div className={styles.container}>
                <Image
                    src='/user avatar.svg'
                    onClick={onClick}
                    width={32}
                    height={32}
                    alt='user avatar'
                    className={styles.userAvatar}
                />
                {userIn && (
                    <div className={styles.wrapper} onClick={onClick}>
                        <div className={styles.userWindow}>
                            {props.gmail}
                            <div className={styles.longOut} onClick={handleLogOut}>
                                <img src='/longout icoon.svg' alt='log out button' width={24} height={24} />
                                <span>Log out</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default UserAvatar;
