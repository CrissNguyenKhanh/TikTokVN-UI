import MainVideo from '~/Components/Video/mainVideo';
import classNames from 'classnames/bind';
import styles from './home.module.scss';
import { useRef, useState } from 'react';
import { mockVideos } from './mockvideo';
import { NULL } from 'sass';

const cx = classNames.bind(styles);

function Home() {
    const [ClassesName, setClassed] = useState('');

    // lưu index video hiện tại
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleUp = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev)); // không xuống dưới 0
    };

    const handleDown = () => {
        if (currentIndex > 0) setClassed('onUp');
        setCurrentIndex((prev) => (prev < mockVideos.length - 1 ? prev + 1 : prev)); // không vượt quá cuối
    };

    return (
        <div className={cx('wrapper')}>
            {/* chỉ hiển thị video hiện tại */}
            <MainVideo video={mockVideos[currentIndex]} />

            <div className={cx('direction')}>
                <div className={cx('arrow')}>
                    <button onClick={handleUp} className={cx('up', classNames)}></button>
                    <button onClick={handleDown} className={cx('down', classNames)}></button>
                </div>
            </div>
        </div>
    );
}

export default Home;
