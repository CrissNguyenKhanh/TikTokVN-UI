import axios from 'axios';

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' },
});

//custom get luon return ve res.data (can cu theo api ben backend gui sang)
export const get = async (path, option) => {
    const response = await request.get(path, option);
    return response.data;
};
export default request;
