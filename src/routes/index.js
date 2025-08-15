import routesConfig from '~/config/routes';
import Home from '~/page/Home';
import Following from '~/page/Following';
import Profile from '~/page/profile';
import Upload from '~/page/Upload';
import HeaderOnly from '~/Layout/HeaderOnly';

//public routes
const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.nickName, component: Profile },
    { path: routesConfig.upLoad, component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
