import classNames from 'classnames/bind';
import { CheckCircleIcon } from '~/components/icons';
import Button from '~/components/Button';
import Image from '~/components/Image';
import styles from './AccountPreview.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function AccountPreview({ data }) {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <a className={cx('avatar-link')} target="_blank" href={`/@:${data.nickname}`} rel="noreferrer">
                    <Image className={cx('avatar')} src={data.avatar} />
                </a>
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </header>
            <section className={cx('body')}>
                <a className={cx('username-wrapper')} href={`/@:${data.nickname}`}>
                    <strong className={cx('username')}>{data.nickname}</strong>
                    {data.tick && <CheckCircleIcon className={cx('tick')} size="1.4rem" />}
                </a>
                <p className={cx('fullname')}>{data.full_name}</p>
            </section>
            <footer className={cx('footer')}>
                <p className={cx('user-stat')}>
                    <strong className={cx('stat-text')}>{data.followers_count}M</strong>
                    <span className={cx('stat-desc')}>Followers</span>
                </p>
                <p className={cx('user-stat')}>
                    <strong className={cx('stat-text')}>{data.likes_count}M</strong>
                    <span className={cx('stat-desc')}>Likes</span>
                </p>
            </footer>
        </div>
    );
}

AccountPreview.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountPreview;
