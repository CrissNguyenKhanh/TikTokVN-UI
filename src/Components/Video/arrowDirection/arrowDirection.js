import styles from './arrowDirection.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function ArrowDirection() {
    return (
        <div className={cx('wrapper')}>
            <button className={cx('up')}></button>
            <button className={cx('down')}></button>
        </div>
    );
}

export default ArrowDirection;
