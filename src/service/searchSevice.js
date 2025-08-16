// lay mot request ben kia
import * as request from '~/utils/httpRequest';

export const searchApi = async (q, type = 'less') => {
    try {
        const res = await request.getSearch(`users/search`, {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
