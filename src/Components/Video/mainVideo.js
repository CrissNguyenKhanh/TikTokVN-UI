import styles from './mainvideo.module.scss';
import classNames from 'classnames/bind';
import VideoTag from './video';

const cx = classNames.bind(styles);

function MainVideo() {
    return (
        <div className={cx('wrapper')}>
            <VideoTag className={cx('body-right')} />

            <div className={cx('direction')}>
                <div className={cx('arrow')}>
                    <button className={cx('up')}></button>
                    <button className={cx('down')}></button>
                </div>
            </div>
        </div>
    );
}

export default MainVideo;
