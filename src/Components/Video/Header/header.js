import styles from './header.module.scss';
import classNames from 'classnames/bind';
import Button from '~/Components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header({ avatarUrl, username, fullName, caption, isFollowing, music }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('asideLeft')}>
                <img className={cx('avatar')} src={avatarUrl} alt={username} />
                <div className={cx('title')}>
                    <div className={cx('title_start')}>
                        <h1 className={cx('name_id')}>{username}</h1>
                        <p className={cx('full_name')}>{fullName}</p>
                    </div>
                    <p className={cx('caption')}>{caption}</p>
                    <p>
                        <FontAwesomeIcon className={cx('icon_music')} icon={faMusic} />{' '}
                        <span className={cx('music_title')}>{music}</span>
                    </p>
                </div>
            </div>
            <div className={cx('asideRight')}>
                <div className={cx('button_Following')}>
                    <Button outline>{isFollowing ? 'Following' : 'Follow'}</Button>
                </div>
            </div>
        </div>
    );
}

export default Header;
