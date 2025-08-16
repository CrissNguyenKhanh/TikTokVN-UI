import axios from 'axios';

const requestSearch = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

//custom get luon return ve res.data (can cu theo api ben backend gui sang)
export const getSearch = async (path, option) => {
    const response = await requestSearch.get(path, option);
    return response.data;
};
export default requestSearch;
