import styles from './sidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function SideBar() {
    return (
        <aside className={cx('wrapper')}>
            <h2>sidebar</h2>
        </aside>
    );
}
export default SideBar;
