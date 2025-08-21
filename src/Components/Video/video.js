import styles from './video.module.scss';
import classNames from 'classnames/bind';
import Header from './Header';
import { ProperWrapper } from '~/layouts/Proper';
import VideoCard from './Video/videoCard';
import ActionBar from './actionBar';
import ArrowDirection from './arrowDirection';
import { HeartIcon, CommentIcon, ShareIcon, SaveIcon } from '../Icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

function VideoTag() {
    const [videoArray, setVideoArray] = useState([
        <VideoCard src={'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'} />,
    ]);

    return (
        <div className={cx('wrapper')}>
            <Header
                avatarUrl="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/efa6ee007ba415e57670658a527bff75~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=8e625629&x-expires=1755932400&x-signature=i7AEyA5UWR1AxoB1EGv%2B%2FuKxOGI%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                username="tieuyeok"
                fullName="Yến Trẻ Măng"
                caption="Bố quà sẻ vào các hội nhóm..."
                isFollowing={false}
                music="quoc khanh 1"
            />
            <div className={cx('body')}>
                {videoArray.map((element, index) => (
                    <div key={index}>{element}</div> // cần return
                ))}
                <div className={cx('body_left')}>
                    <div className={cx('avatarWrapper')}>
                        <img
                            className={cx('avatar')}
                            src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/efa6ee007ba415e57670658a527bff75~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=8e625629&x-expires=1755932400&x-signature=i7AEyA5UWR1AxoB1EGv%2B%2FuKxOGI%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                            alt="quockhanh1"
                        />
                        <span className={cx('followIcon')}>+</span>
                    </div>
                    <ActionBar icon={<HeartIcon />} detail="9.1" />
                    <ActionBar icon={<CommentIcon />} detail="9.1" />
                    <ActionBar icon={<SaveIcon />} detail="9.1" />
                    <ActionBar icon={<ShareIcon />} detail="9.1" />
                    <ActionBar iconMusic="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/efa6ee007ba415e57670658a527bff75~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=8e625629&x-expires=1755932400&x-signature=i7AEyA5UWR1AxoB1EGv%2B%2FuKxOGI%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my" />
                </div>
                
            </div>
        </div>
    );
}

export default VideoTag;
