'use client'
import Link from 'next/link';
import TextButton from '../TextButton/TextButton';
import styles from './TrendHitsCard.module.scss';
import { useEffect, useState } from 'react';

export default () => {
    const backgrounds = [
        {
            id: 1,
            backgroundImage: `url(/background/harrystyles.svg)`,
            color: 'linear-gradient(270deg, #E2934B 7.1%, #D3620F 94.73%)',
        },
        {
            id: 2,
            backgroundImage: `url(/background/imagesecond.svg)`,
            color: 'linear-gradient(270deg, #5E4BE2 36.76%, #34297C 94.73%)',
        },
        {
            id: 3,
            backgroundImage: `url(/background/imagethird.svg)`,
            color: 'linear-gradient(270deg, #E24BD3 25.06%, #4E0FD3 94.73%)',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [backgrounds.length]);

    return (
        <div
            className={styles.container}
            style={{
                background: backgrounds[currentIndex].color,

            }}
        >
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Trend Hits</h2>
                <h1 className={styles.year}>2024</h1>
                <div className={styles.textButton}>
                    <Link href={'/full list'}>
                        <TextButton title={'View playlist'} backgroundColor='#00000038' />
                    </Link>
                </div>
            </div>
            <div className={styles.test} style={{
                backgroundImage: backgrounds[currentIndex].backgroundImage,

            }}>
            </div>
        </div>
    );
};
