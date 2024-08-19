import React from 'react';
import styles from "./TopCharts.module.scss";
import ChartCard from '../ ChartCard/ ChartCard';

type Props = {
    limit?: number
}
const TopCharts = (props: Props) => {
    const chartsData = [
        {
            id: 1,
            title: 'Top hits 2024',
            imageUrl: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84d22b618a07eda3379e2a4d3c',
        },
        {
            id: 2,
            title: 'Top hits 2024',
            imageUrl: 'https://c.saavncdn.com/581/Super-Chart-Hits-English-2010-500x500.jpg',
        },
        {
            id: 3,
            title: 'Top hits 2024',
            imageUrl: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84d22b618a07eda3379e2a4d3c',
        },
        {
            id: 4,
            title: 'Top hits 2024',
            imageUrl: 'https://c.saavncdn.com/581/Super-Chart-Hits-English-2010-500x500.jpg',
        },
        {
            id: 5,
            title: 'Top hits 2024',
            imageUrl: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84d22b618a07eda3379e2a4d3c',
        },
        {
            id: 6,
            title: 'Top hits 2024',
            imageUrl: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84d22b618a07eda3379e2a4d3c',
        },
        {
            id: 7,
            title: 'Top hits 2024',
            imageUrl: 'https://c.saavncdn.com/581/Super-Chart-Hits-English-2010-500x500.jpg',
        },
        {
            id: 8,
            title: 'Top hits 2024',
            imageUrl: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84d22b618a07eda3379e2a4d3c',
        },
    ];

    const displayedItems = props.limit ? chartsData.slice(0, props.limit) : chartsData;

    return (
        <div className={styles.chartCardContainer}>
            {displayedItems.map(chartCard => (
                <ChartCard
                    key={chartCard.id}
                    title={chartCard.title}
                    imageUrl={chartCard.imageUrl}
                />
            ))}
        </div>
    );
}

export default TopCharts;
