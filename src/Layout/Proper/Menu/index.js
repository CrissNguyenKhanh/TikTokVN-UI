import Tippy from '@tippyjs/react/headless';
import styles from './menu.module.scss';
import classNames from 'classnames/bind';
import { ProperWrapper } from '..';
import Button from '~/Components/Button';
import Menuitems from './MenuItems';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const renderMenuItems = () => {
        return items.map((menuItem, index) => <Menuitems key={index} data={menuItem} />);
    };
    return (
        <div>
            <Tippy
                interactive
                placement={'bottom-end'}
                delay={[0, 700]}
                render={(attrs) => (
                    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                        <ProperWrapper className={cx('menu-proper')}>{renderMenuItems()}</ProperWrapper>
                    </div>
                )}
            >
                {children}
            </Tippy>
        </div>
    );
}

export default Menu;
