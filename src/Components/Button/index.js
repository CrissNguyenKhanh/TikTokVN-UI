import classNames from 'classnames/bind';
import styles from './button.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    small = false,
    large = false,
    text = false,
    disabled = false,
    rounded = false,
    children,
    className,
    lefIcon,
    rightIcon,
    onClick,

    ...passProps
}) {
    let Comp = 'button';
    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        rounded,
        [className]: className,
    });
    const props = {
        onClick,
        ...passProps,
    };

    //remove eventlistener
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (href) {
        props.href = href;
        Comp = 'a';
    } else if (to) {
        props.to = to;
        Comp = Link;
    }

    return (
        <Comp className={classes} {...props}>
            {lefIcon && <span className={cx('icon')}>{lefIcon} </span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon} </span>}
        </Comp>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
};
export default Button;
