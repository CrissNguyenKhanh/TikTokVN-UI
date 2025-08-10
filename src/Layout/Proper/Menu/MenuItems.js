import Button from '~/Components/Button';
import styles from './menu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Menuitems({ data, onClick }) {
    return (
        <Button className={cx('menu-item')} lefIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default Menuitems;
