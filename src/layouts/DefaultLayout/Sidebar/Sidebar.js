import classNames from 'classnames/bind';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';

import {
    HomeIcon,
    HomeOutlineIcon,
    LiveIcon,
    LiveOutlineIcon,
    UserGroupIcon,
    UserGroupOutlineIcon,
} from '~/components/icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For You"
                    to={config.routes.home}
                    icon={<HomeOutlineIcon />}
                    activeIcon={<HomeIcon />}
                />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupOutlineIcon />}
                    activeIcon={<UserGroupIcon />}
                />
                <MenuItem title="Live" to={config.routes.live} icon={<LiveOutlineIcon />} activeIcon={<LiveIcon />} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
