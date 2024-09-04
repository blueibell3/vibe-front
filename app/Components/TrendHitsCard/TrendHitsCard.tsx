'use client'
import { useRouter } from 'next/navigation';
import TextButton from '../TextButton/TextButton';
import styles from './TrendHitsCard.module.scss';
import { useEffect, useState } from 'react';

type Props = {
    pathName: string
}

const TrendHitsCard = (props: Props) => {
    const router = useRouter()
    const handleClick = () => {
        router.push(props.pathName)
    }

    const backgrounds = [
        {
            id: 1,
            backgroundImage: `url(/background/sabrina.svg)`,
            title: 'TREND HITS',
        },
        {
            id: 2,
            backgroundImage: `url(/background/second.svg)`,
            title: ' MOST LIKED',

        },
        {
            id: 3,
            backgroundImage: `url(/background/third.svg)`,
            title: 'NEW ARRIVALS'
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
            style={{ backgroundImage: backgrounds[currentIndex].backgroundImage }}
        >
            <div className={styles.wrapper}>
                <div className={styles.solution}>
                    <div className={styles.title}>
                        {backgrounds[currentIndex].title}
                    </div>
                    <div className={styles.textButton}>
                        <TextButton title="View playlist" mode="fill" onClick={handleClick} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendHitsCard;