import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CheckCircleIcon } from '~/components/icons';
import Image from '~/components/Image';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem({ data = {} }) {
    data = {
        nickname: 'ngodat',
        full_name: 'Ngô Văn Đạt',
        avatar: 'https://aaaaa',
        tick: true,
    };

    return (
        <Link to={`/@${data.nickname}`} className={cx('item')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
            <div className={cx('info')}>
                <div className={cx('username-wrapper')}>
                    <h4 className={cx('username')}>{data.nickname}</h4>
                    {data.tick && <CheckCircleIcon className={cx('tick')} size="1.4rem" />}
                </div>
                <p className={cx('fullname')}>{data.full_name}</p>
            </div>
        </Link>
    );
}

AccountItem.protoTypes = {
    data: PropTypes.object,
};

export default AccountItem;
