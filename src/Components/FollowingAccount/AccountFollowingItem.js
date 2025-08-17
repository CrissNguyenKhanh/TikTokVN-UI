import classNames from 'classnames/bind';
import styles from './suggestedAccountFollowingItem.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);
function AccountFollowingItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8da33611d7e974e624492ba0f17316f8~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=e6e0a09b&x-expires=1755590400&x-signature=fOpNvE02pWXjrgkOWayE5OowKDw%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
                alt="quockhanh1"
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>khanhnq.itFollowing</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('display')}>Nguyễn Quốc Khánh</p>
            </div>
        </div>
    );
}
AccountFollowingItem.propTypes = {};
export default AccountFollowingItem;
