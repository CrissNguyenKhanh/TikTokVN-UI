import styles from './mainvideo.module.scss';
import classNames from 'classnames/bind';
import VideoTag from './video';

const cx = classNames.bind(styles);

function MainVideo({ video }) {
    return (
        <div >
            <VideoTag
                avatarUrl={video.avatarUrl}
                username={video.username}
                fullName={video.fullName}
                caption={video.caption}
                isFollowing={video.isFollowing}
                music={video.music}
                videoList={video.videoList}
                stats={video.stats}
                musicThumbnail={video.musicThumbnail}
            />
        </div>
    );
}

export default MainVideo;
