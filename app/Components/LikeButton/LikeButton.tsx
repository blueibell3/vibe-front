'use client';
import Image from 'next/image';
import { useState } from 'react';
import styles from './LikeButton.module.scss';

const LikeButton = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={styles.container}>
            <button onClick={handleClick} className={styles.button}>
                <Image src="/icons/three dots.svg" alt="menu" width={24} height={24} />
            </button>
            {isMenuOpen && (
                <div className={styles.menu} onClick={handleClick}>
                    <div className={styles.menuItem}>
                        <span>+ Create playlist</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LikeButton;
