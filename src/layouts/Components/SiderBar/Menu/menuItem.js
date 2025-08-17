import classNames from 'classnames/bind';
import styles from './menu.module.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useRef } from 'react';

const cx = classNames.bind(styles);

function Menuitems({ title, to, icon, iconActive }) {
    const refNav = useRef();
    return (
        <NavLink ref={refNav} to={to} className={(nav) => cx('menu-item', { active: nav.isActive })}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('active-icon')}>{iconActive}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

Menuitems.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};

export default Menuitems;
