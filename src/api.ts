import axios from 'axios';

export async function fetchDataFromServer(): Promise<any> {
    const response = await axios.get('/api/data'); // Replace with your API endpoint
    return response.data;
}