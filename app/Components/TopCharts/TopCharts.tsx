'use client';
import styles from "./TopCharts.module.scss";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ChartCard from "../ChartCard/ ChartCard";

type ChartListenCounter = {
    id: number;
    musicId: number;
    counter: number;
    userId: number;
    createdAt: string;
    updatedAt: string;
    deleteAt: string | null;
};

type ChartPhoto = {
    id: number;
    url: string;
    key: string;
    bucket: string;
    fileName: string;
};

type Chart = {
    id: number;
    name: string;
    artistName: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    listenCounter: ChartListenCounter[];
    photo: ChartPhoto;
    url: {
        id: number;
        url: string;
        key: string;
        bucket: string;
        fileName: string;
    };
};

type Props = {
    limit?: number;
    isHomePage: boolean;
};

const TopCharts: React.FC<Props> = (props) => {
    const [chartData, setChartData] = useState<Chart[]>([]);

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
                console.error('Error fetching chart data:', error);
            }
        };

        fetchCharts();
    }, []);

    const displayedItems = props.limit ? chartData.slice(0, props.limit) : chartData;

    return (
        <div
            className={`${styles.chartCardContainer} ${!props.isHomePage ? styles.otherPageContainer : ''}`}
        >
            {displayedItems.map((chart) => (
                <ChartCard
                    key={chart.id}
                    title={chart.name}
                    imageUrl={chart.photo.url}
                    id={chart.id}
                />
            ))}
        </div>
    );
}

export default TopCharts;
