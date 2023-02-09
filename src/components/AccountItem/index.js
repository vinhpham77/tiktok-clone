import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { CheckCircleIcon } from '~/components/icons';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    <span>{data.nickname}</span>
                    {data.tick && <CheckCircleIcon />}
                </h4>
                <p className={cx('fullname')}>{data.full_name}</p>
            </div>
        </Link>
    );
}

export default AccountItem;
