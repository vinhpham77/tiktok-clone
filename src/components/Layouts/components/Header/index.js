import classNames from 'classnames/bind';
import { BsXCircleFill, BsCoin, BsGearWide } from 'react-icons/bs';
import { BiSearch, BiPlus } from 'react-icons/bi';
import { IoEllipsisVertical, IoPaperPlaneOutline, IoLanguageOutline } from 'react-icons/io5';
import { MdOutlineKeyboardAlt } from 'react-icons/md';
import { BsQuestionCircle } from 'react-icons/bs';
import { FiMoon, FiLogIn } from 'react-icons/fi';
import { RiNotificationBadgeLine, RiUser3Line, RiLiveLine } from 'react-icons/ri';
import TippyHeadless from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import images from '~/assets/images';
import styles from './Header.module.scss';
import { useEffect, useState } from 'react';
import { PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import MenuPopper from '~/components/Popper/Menu';
import 'tippy.js/dist/tippy.css';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: IoLanguageOutline,
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
        icon: BsQuestionCircle,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: MdOutlineKeyboardAlt,
        title: 'Keyboard shorcuts',
    },
    {
        icon: FiMoon,
        title: 'Dark mode',
    },
];

const MENU_USER_ITEMS = [
    {
        icon: RiUser3Line,
        title: 'View profile',
        to: '/@user123',
    },
    {
        icon: BsCoin,
        title: 'Get coins',
    },
    {
        icon: RiLiveLine,
        title: 'Live Studio',
    },
    {
        icon: BsGearWide,
        title: 'Setting',
    },
    ...MENU_ITEMS,
    {
        icon: FiLogIn,
        title: 'Log out',
        separate: true,
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            // setSearchResult([1, 2]);
        }, 0);
    }, []);

    const handleMenuChanged = () => {};

    const user = '123';

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="logo" className={cx('logo')} />
                <TippyHeadless
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input spellCheck="false" placeholder="Search accounts and videos" />
                        <button className={cx('search-clear')}>
                            <BsXCircleFill />
                        </button>
                        <button className={cx('search-btn')}>
                            <BiSearch />
                        </button>
                    </div>
                </TippyHeadless>

                <div className={cx('actions')}>
                    {user ? (
                        <>
                            <Tippy content="Messages">
                                <button className={cx('msg-btn', 'icon-btn')}>
                                    <IoPaperPlaneOutline />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox">
                                <button className={cx('inbox-btn', 'icon-btn')}>
                                    <RiNotificationBadgeLine />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button outline LeftIcon={BiPlus}>
                                Upload
                            </Button>
                            <Button primary>Login</Button>
                        </>
                    )}

                    <MenuPopper items={user ? MENU_USER_ITEMS : MENU_ITEMS} onChange={handleMenuChanged}>
                        {user ? (
                            <img
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1610321846996993.jpeg?x-expires=1675782000&x-signature=0Fj%2FYQ2xF%2BNdItFTWh1yRMn7N3Q%3D"
                                alt="user1202103"
                                className={cx('user-avatar')}
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <IoEllipsisVertical />
                            </button>
                        )}
                    </MenuPopper>
                </div>
            </div>
        </header>
    );
}

export default Header;
