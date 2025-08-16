import config from '~/config';

import Home from '~/page/Home';
import Following from '~/page/Following';
import Profile from '~/page/profile';
import Upload from '~/page/Upload';
import HeaderOnly from '~/layouts/HeaderOnly';
//public routes
const publicRoutes = [
    { path: config.routesConfig.home, component: Home },
    { path: config.routesConfig.following, component: Following },
    { path: config.routesConfig.profile, component: Profile },
    { path: config.routesConfig.nickName, component: Profile },
    { path: config.routesConfig.upLoad, component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
