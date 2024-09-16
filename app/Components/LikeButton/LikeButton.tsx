'use client';
import Image from 'next/image';
import { useState } from 'react';
import styles from './LikeButton.module.scss';
import Link from 'next/link';

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
                        <Link href='/playlist'>
                            <div>+ Create playlist</div>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LikeButton;
