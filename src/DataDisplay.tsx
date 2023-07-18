import React, { useEffect, useState } from 'react';
import { fetchDataFromServer } from './api';

const DataDisplay: React.FC = () => {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchDataFromServer();
                setData(result);
            } catch (error) {
                // Handle error
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return <div>{data ? <span>{data.message}</span> : <span>Loading...</span>}</div>;
};

export default DataDisplay;