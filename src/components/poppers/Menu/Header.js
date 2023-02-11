import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { ChevronLeftIcon } from '~/components/icons';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Header({ title, onBack }) {
    return (
        <header className={cx('header')}>
            <button className={cx('back-btn')} onClick={onBack}>
                <ChevronLeftIcon />
            </button>
            <h4 className={cx('title')}>{title}</h4>
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
};

export default Header;
