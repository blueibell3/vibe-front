'use client'
import styles from "./TopCharts.module.scss";
import ChartCard from '../ChartCard/ ChartCard';
import axios from 'axios';
import React, { useEffect, useState } from 'react';



type Charts = {
    id: number;
    title: string;
    file: {
        url: string;
    };
}


type Props = {
    limit?: number
    isHomePage: boolean;

}
const TopCharts = (props: Props) => {
    const [chartData, setChartData] = useState<Charts[]>([]);
    useEffect(() => {
        const fetchCharts = async () => {
            try {
                const token = document.cookie
                    .split('; ')
                    .find((row) => row.startsWith('token='))
                    ?.split('=')[1];

                if (!token) {
                    throw new Error('No token found');
                }

                const response = await axios.get('https://vibetunes-backend.onrender.com/music/weekCharts', {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                });

                setChartData(Array.isArray(response.data) ? response.data : [response.data]);
            } catch (error) {
                console.error('Error fetching album data:', error);
            }
        };

        fetchCharts();
    }, []);

    const displayedItems = props.limit ? chartData.slice(0, props.limit) : chartData;

    return (
        <div
            className={`${styles.chartCardContainer} ${!props.isHomePage ? styles.otherPageContainer : ''}`}
        >
            {displayedItems.map((chartCard) => (
                <ChartCard
                    key={chartCard.id}
                    title={chartCard.title}
                    imageUrl={chartCard.file?.url}
                    id={chartCard.id}
                />
            ))}
        </div>

    );
}

export default TopCharts;
