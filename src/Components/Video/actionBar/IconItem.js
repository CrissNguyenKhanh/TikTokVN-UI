import React, { useState } from 'react';
import styles from './actionbar.module.scss';
import classNames from 'classnames/bind';
import { HeartIcon, CommentIcon, ShareIcon, SaveIcon } from '~/Components/Icons';

const cx = classNames.bind(styles);

function IconItem({ icon, detail, iconMusic }) {
    const [isActive, setIsActive] = useState(false);

    // xác định loại icon
    const variant = React.isValidElement(icon)
        ? icon.type === HeartIcon
            ? 'heart'
            : icon.type === CommentIcon
            ? 'comment'
            : icon.type === ShareIcon
            ? 'share'
            : icon.type === SaveIcon
            ? 'save'
            : undefined
        : undefined;

    const handleClick = () => {
        setIsActive((prev) => !prev);
    };

    return (
        <div
            className={cx('wrapper_iconItem', {
                active: isActive,
                [variant]: variant,
            })}
            onClick={handleClick}
        >
            {icon && (
                <>
                    <span className={cx('icon_item')}>{icon}</span>
                    {detail && <strong className={cx('detail')}>{detail}k</strong>}
                </>
            )}

            {iconMusic && (
                <div className={cx('musicWrapper')}>
                    <img src={iconMusic} alt="music avatar" className={cx('icon_music')} />
                </div>
            )}
        </div>
    );
}

export default IconItem;
