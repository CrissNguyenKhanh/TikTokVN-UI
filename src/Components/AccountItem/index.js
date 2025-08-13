import classNames from 'classnames/bind';
import styles from './accountite.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../Images';

const cx = classNames.bind(styles);
function AccountItems() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/0ec9bbd1e18d4d4e80d7237b2827f87e~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=8c53f2a7&x-expires=1753282800&x-signature=dfuxnk54ipm1UtjJldyg%2FDFci3c%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                alt="Hoaa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>민준 씨</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenQuocKhanh</span>
            </div>
        </div>
    );
}

export default AccountItems;
