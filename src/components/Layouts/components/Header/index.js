import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import images from '~/assets/images';
import styles from './Header.module.scss';
import Button from '~/components/Button';
import MenuPopper from '~/components/poppers/Menu';
import 'tippy.js/dist/tippy.css';
import Image from '~/components/Image';
import Search from '../Search';
import { Link } from 'react-router-dom';
import routesConfig from '~/config/routes';

import {
    UserIcon,
    QuestionIcon,
    TikTokCoinIcon,
    InboxIcon,
    LogOutIcon,
    MoonIcon,
    GearIcon,
    KeyboardIcon,
    LiveIcon,
    LanguageIcon,
    PlaneIcon,
    EffectIcon,
    PlusIcon,
    EllipsisVerticalIcon,
} from '~/components/icons';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: LanguageIcon,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: QuestionIcon,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: KeyboardIcon,
        title: 'Keyboard shortcuts',
    },
    {
        icon: MoonIcon,
        title: 'Dark mode',
    },
];

const MENU_USER_ITEMS = [
    {
        icon: UserIcon,
        title: 'View profile',
        to: '/@user123',
    },
    {
        icon: TikTokCoinIcon,
        title: 'Get coins',
    },
    {
        icon: LiveIcon,
        title: 'Live Studio',
    },
    {
        icon: GearIcon,
        title: 'Setting',
    },
    ...MENU_ITEMS,
    {
        icon: LogOutIcon,
        title: 'Log out',
        separate: true,
    },
];

function Header() {
    const handleMenuChanged = () => {};

    const user = 'a';

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routesConfig.home} className={cx('logo-link')}>
                    <Image src={images.logo} alt="logo" className={cx('logo')} />
                </Link>
                <Search />
                <div className={cx('actions')}>
                    <Button outline LeftIcon={PlusIcon}>
                        Upload
                    </Button>
                    {!user && <Button primary>Login</Button>}
                    <Tippy content="Create effects">
                        <button className={cx('icon-btn', 'effect-icon')}>
                            <EffectIcon size="2.2rem" />
                        </button>
                    </Tippy>
                    {user && (
                        <>
                            <Tippy content="Messages">
                                <button className={cx('icon-btn')}>
                                    <PlaneIcon size="2.6rem" />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox">
                                <button className={cx('icon-btn')}>
                                    <InboxIcon size="3.2rem" />
                                </button>
                            </Tippy>
                        </>
                    )}

                    <MenuPopper items={user ? MENU_USER_ITEMS : MENU_ITEMS} onChange={handleMenuChanged}>
                        {user ? (
                            <Image
                                src="https://scontent.fdad3-1.fna.fbcdn.net/v/t1.6435-9/54798713_839835193036669_8703457475350757376_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=1s1HTYa22DgAX-JfXCi&_nc_ht=scontent.fdad3-1.fna&oh=00_AfD-2HD6RtkW_1YRCoKMrWXKCYKzH019zjXjEo1hLKSlAw&oe=640B09DE"
                                alt="user1202103"
                                className={cx('user-avatar')}
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <EllipsisVerticalIcon />
                            </button>
                        )}
                    </MenuPopper>
                </div>
            </div>
        </header>
    );
}

export default Header;
