import { HeaderOnly } from '~/components/Layouts';

const { default: Home } = require('~/pages/Home');
const { default: Following } = require('~/pages/Following');
const { default: Upload } = require('~/pages/Upload');

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
