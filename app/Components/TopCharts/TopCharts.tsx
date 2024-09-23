import React from 'react';
import styles from "./TopCharts.module.scss";
import ChartCard from '../ChartCard/ ChartCard';

type Props = {
    limit?: number
    isHomePage: boolean;

}
const TopCharts = (props: Props) => {
    const chartsData = [
        {
            id: 1,
            title: 'Top hits 2024',
            imageUrl: '/chartss.svg',
        },
        {
            id: 2,
            title: 'Top hits 2024',
            imageUrl: '/chartss.svg',
        },
        {
            id: 3,
            title: 'Top hits 2024',
            imageUrl: '/chartss.svg',
        },
        {
            id: 4,
            title: 'Top hits 2024',
            imageUrl: '/chartss.svg',
        },
        {
            id: 5,
            title: 'Top hits 2024',
            imageUrl: '/chartss.svg',
        },
        {
            id: 6,
            title: 'Top hits 2024',
            imageUrl: '/chartss.svg',
        },
        {
            id: 7,
            title: 'Top hits 2024',
            imageUrl: '/chartss.svg',
        },
        {
            id: 8,
            title: 'Top hits 2024',
            imageUrl: '/chartss.svg',
        },
    ];

    const displayedItems = props.limit ? chartsData.slice(0, props.limit) : chartsData;

    return (
        <div
            className={`${styles.chartCardContainer} ${!props.isHomePage ? styles.otherPageContainer : ''}`}
        >
            {displayedItems.map(chartCard => (
                <ChartCard
                    key={chartCard.id}
                    title={chartCard.title}
                    imageUrl={chartCard.imageUrl}
                    id={chartCard.id}
                />
            ))}
        </div>

    );
}

export default TopCharts;
