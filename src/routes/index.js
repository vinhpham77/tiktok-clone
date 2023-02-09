import { HeaderOnly } from '~/components/Layouts';

const { default: Home } = require('~/pages/Home');
const { default: Profile } = require('~/pages/Profile');
const { default: Following } = require('~/pages/Following');
const { default: Upload } = require('~/pages/Upload');

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/@:nickname', component: Profile },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
