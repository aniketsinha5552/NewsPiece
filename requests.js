import axios from 'axios';

const baseUrl = 'https://news-webscraper.vercel.app/news';

export const newsRequest = axios.create({
    baseURL: baseUrl,
})