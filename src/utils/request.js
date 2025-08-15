import axios from 'axios';

const requestSearch = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' },
});

//custom get luon return ve res.data (can cu theo api ben backend gui sang)
export const getSearch = async (path, option) => {
    const response = await requestSearch.get(path, option);
    return response.data;
};
export default requestSearch;
