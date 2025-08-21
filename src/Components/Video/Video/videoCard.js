import { useRef, useState } from 'react';
import styles from './video.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function VideoCard({ src }) {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(false);
    const [progress, setProgress] = useState(0); // % thời lượng
    const [isSeeking, setIsSeeking] = useState(false);
    const handleTimeUpdate = () => {
        const current = videoRef.current.currentTime;
        const duration = videoRef.current.duration;
        if (duration > 0) {
            setProgress((current / duration) * 100);
        }
    };

    const togglePlay = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const toggleMute = () => {
        videoRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
    };

    const handleSeek = (e) => {
        const bar = e.currentTarget;
        const rect = bar.getBoundingClientRect();
        const posX = e.clientX - rect.left;
        const ratio = Math.max(0, Math.min(1, posX / rect.width));
        const duration = videoRef.current.duration;
        videoRef.current.currentTime = ratio * duration;
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('video_main')}>
                <video
                    ref={videoRef}
                    autoPlay={true}
                    loop
                    muted={isMuted}
                    className={cx('video')}
                    src={src}
                    onTimeUpdate={handleTimeUpdate}
                />

                {/* Overlay nút play/pause */}
                <div className={cx('controls')}>
                    <button onClick={togglePlay}>
                        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                    </button>
                    <button onClick={toggleMute}>
                        <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} />
                    </button>
                </div>
                <div
                    className={cx('progressBar')}
                    onMouseDown={(e) => {
                        setIsSeeking(true);
                        handleSeek(e);
                    }}
                    onMouseMove={(e) => {
                        if (isSeeking) handleSeek(e);
                    }}
                    onMouseUp={() => setIsSeeking(false)}
                    onMouseLeave={() => setIsSeeking(false)}
                >
                    <div className={cx('progress')} style={{ width: `${progress}%` }}></div>
                    <div className={cx('thumb')} style={{ left: `${progress}%` }}></div>
                </div>
            </div>
        </div>
    );
}

export default VideoCard;
