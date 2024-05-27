import axios, { AxiosResponse } from 'axios';
import { IData } from '../types/data.ts';

const baseURL = process.env.REACT_APP_BASE_URL;

if (!baseURL) {
  throw new Error('Base URL is not defined');
}

export const fetchData = async (): Promise<IData[]> => {
  try {
    const response: AxiosResponse<IData[]> = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
