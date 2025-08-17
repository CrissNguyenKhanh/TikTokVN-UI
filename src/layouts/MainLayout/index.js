import classNames from 'classnames/bind';
import styles from './defaultlayout.module.scss';
import SideBar from '../Components/SiderBar/Sidebar';
import Header from '../Components/Header';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <SideBar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
