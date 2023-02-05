import classNames from 'classnames/bind';
import { BsXCircleFill } from 'react-icons/bs';
import { BiSearch, BiPlus } from 'react-icons/bi';
import Tippy from '@tippyjs/react/headless';
import images from '~/assets/images';
import styles from './Header.module.scss';
import { useEffect, useState } from 'react';
import { WrapperPopper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2]);
        }, 0);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>{<img src={images.logo} alt="logo" />}</div>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <WrapperPopper>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </WrapperPopper>
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
                </Tippy>
                <div className={cx('actions')}>
                    <Button outline LeftIcon={BiPlus}>
                        Upload
                    </Button>
                    <Button primary>Login</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
