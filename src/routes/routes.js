import { HeaderOnly } from '~/layouts';
import config from '~/config';
const { default: Home } = require('~/pages/Home');
const { default: Profile } = require('~/pages/Profile');
const { default: Following } = require('~/pages/Following');
const { default: Upload } = require('~/pages/Upload');
const { default: Live } = require('~/pages/Live');

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.following, component: Following },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.live, component: Live },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
