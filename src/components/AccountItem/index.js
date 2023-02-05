import classNames from 'classnames/bind';
import styles from './Account.module.scss';
import { BsFillCheckCircleFill } from 'react-icons/bs';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1610321846996993.jpeg?x-expires=1675782000&x-signature=0Fj%2FYQ2xF%2BNdItFTWh1yRMn7N3Q%3D"
                alt="Hoaa"
            />
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    <span>Nguyen Van A</span>
                    <BsFillCheckCircleFill />
                </h4>
                <p className={cx('fullname')}>nguyenvana</p>
            </div>
        </div>
    );
}

export default AccountItem;
