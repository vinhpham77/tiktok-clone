import { HeaderOnly } from '~/components/layouts';
import routesConfig from '~/config/routes.js';
const { default: Home } = require('~/pages/Home');
const { default: Profile } = require('~/pages/Profile');
const { default: Following } = require('~/pages/Following');
const { default: Upload } = require('~/pages/Upload');

const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
