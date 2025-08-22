import styles from './video.module.scss';
import classNames from 'classnames/bind';
import Header from './Header';
import VideoCard from './Video/videoCard';
import ActionBar from './actionBar';
import { HeartIcon, CommentIcon, ShareIcon, SaveIcon } from '../Icons';

const cx = classNames.bind(styles);

function VideoTag({
    avatarUrl,
    username,
    fullName,
    caption,
    isFollowing,
    music,
    videoList = [],
    stats = { likes: '0', comments: '0', saves: '0', shares: '0' },
    musicThumbnail,
}) {
    return (
        <div className={cx('wrapper')}>
            {/* Header */}
            <Header
                avatarUrl={avatarUrl}
                username={username}
                fullName={fullName}
                caption={caption}
                isFollowing={isFollowing}
                music={music}
            />

            <div className={cx('body')}>
                {/* Video list */}
                {videoList.map((src, index) => (
                    <VideoCard key={index} src={src} />
                ))}

                {/* Action bar bên trái */}
                <div className={cx('body_left')}>
                    <div className={cx('avatarWrapper')}>
                        <img className={cx('avatar')} src={avatarUrl} alt={username} />
                        <span className={cx('followIcon')}>+</span>
                    </div>

                    <ActionBar icon={<HeartIcon />} detail={stats.likes} />
                    <ActionBar icon={<CommentIcon />} detail={stats.comments} />
                    <ActionBar icon={<SaveIcon />} detail={stats.saves} />
                    <ActionBar icon={<ShareIcon />} detail={stats.shares} />
                    <ActionBar iconMusic={musicThumbnail} />
                </div>
            </div>
        </div>
    );
}

export default VideoTag;
