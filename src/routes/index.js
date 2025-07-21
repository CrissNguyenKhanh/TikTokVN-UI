import Home from '~/page/Home';
import Following from '~/page/Following';
import Profile from '~/page/profile';
import Upload from '~/page/Upload';
import HeaderOnly from '~/Layout/HeaderOnly';

//public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upLoad', component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
