import React from 'react';
import styles from '../ ChartCard/ ChartCard.module.scss';
import TextButton from '../TextButton/TextButton';
import Link from 'next/link';

type Props = {
    id?: number;
    title: string;
    imageUrl: string;
}

const ChartCard = (props: Props) => {

    return (
        <>
            <Link href={`${props.id}`}>
                <div className={styles.chartCardMain}>
                    <div className={styles.chartCards}>
                        <div className={styles.card}>
                            <div className={styles.chartCardBanner}>
                                <div className={styles.chartCardF}>
                                    <img className={styles.chartCardImage} src={props.imageUrl} alt={props.imageUrl} />
                                    <div className={styles.chartCardtext}>
                                        <div className={styles.chartCardT}>
                                            <div className={styles.chartCardTitle}>{props.title}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default ChartCard