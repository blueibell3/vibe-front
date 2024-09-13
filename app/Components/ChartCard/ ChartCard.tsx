import React from 'react';
import styles from './ ChartCard.module.scss';
import Link from 'next/link';

type Props = {
    id: number;
    title: string;
    imageUrl: string;
}

const ChartCard = (props: Props) => {

    return (
        <>
             <Link className={styles.link} href={`topCharts/${props.id}`}>
               <div className={styles.chartCard}>
                    <img className={styles.chartCardImage} src={props.imageUrl} alt={props.imageUrl} />
                    <div className={styles.chartCardtext}>
                        <div className={styles.chartCardT}>
                            <div className={styles.chartCardTitle}>{props.title}</div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default ChartCard