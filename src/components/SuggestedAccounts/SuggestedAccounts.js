import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

const data = [
    {
        nickname: 'ngodat',
        full_name: 'Ngô Văn Đạt',
        avatar: 'https://aaaaa',
        tick: true,
        followers_count: 7.2,
        likes_count: 23.6,
    },
    {
        nickname: 'ngodat',
        full_name: 'Ngô Văn Đạt',
        avatar: 'https://aaaaa',
        tick: true,
        followers_count: 7.2,
        likes_count: 23.6,
    },
    {
        nickname: 'ngodat',
        full_name: 'Ngô Văn Đạt',
        avatar: 'https://aaaaa',
        tick: true,
        followers_count: 7.2,
        likes_count: 23.6,
    },
    {
        nickname: 'ngodat',
        full_name: 'Ngô Văn Đạt',
        avatar: 'https://aaaaa',
        tick: true,
        followers_count: 7.2,
        likes_count: 23.6,
    },
];

function SuggestedAccounts({ label, previewable = false }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {data.map((item, index) => {
                return <AccountItem key={index} data={item} previewable={previewable} />;
            })}
            <button className={cx('view-controller')}>See all</button>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
    previewable: PropTypes.bool,
};

export default SuggestedAccounts;
