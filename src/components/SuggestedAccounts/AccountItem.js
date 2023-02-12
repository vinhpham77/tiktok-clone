import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CheckCircleIcon } from '~/components/icons';
import Image from '~/components/Image';
import styles from './SuggestedAccounts.module.scss';
import TippyHeadless from '@tippyjs/react/headless';
import { PopperWrapper } from '~/components/poppers';
import AccountPreview from '~/components/AccountPreview';

const cx = classNames.bind(styles);

function AccountItem({ data, previewable }) {
    const renderPreview = (props) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview data={data} />
                </PopperWrapper>
            </div>
        );
    };

    return previewable ? (
        <div>
            <TippyHeadless interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
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
            </TippyHeadless>
        </div>
    ) : (
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
    data: PropTypes.object.isRequired,
    previewable: PropTypes.bool,
};

export default AccountItem;
