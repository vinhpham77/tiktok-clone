import classNames from 'classnames/bind';
import styles from './Account.module.scss';
import { CheckCircleIcon } from '~/components/Icons';
import Image from '~/components/Image';
const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://scontent.fdad3-1.fna.fbcdn.net/v/t1.6435-9/54798713_839835193036669_8703457475350757376_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=1s1HTYa22DgAX-JfXCi&_nc_ht=scontent.fdad3-1.fna&oh=00_AfD-2HD6RtkW_1YRCoKMrWXKCYKzH019zjXjEo1hLKSlAw&oe=640B09DE"
                alt="Hoa"
            />
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    <span>nguyenvana</span>
                    <CheckCircleIcon />
                </h4>
                <p className={cx('fullname')}>Nguyễn Văn A</p>
            </div>
        </div>
    );
}

export default AccountItem;
