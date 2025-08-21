import classNames from 'classnames/bind';
import styles from './actionbar.module.scss';
import IconItem from './IconItem';
import { HeartIcon } from '~/Components/Icons';

const cx = classNames.bind(styles);

function ActionBar({ icon, detail, iconMusic }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('icon_item')}>
                <IconItem icon={icon} detail={detail} iconMusic={iconMusic} />
            </div>
        </div>
    );
}

export default ActionBar;
