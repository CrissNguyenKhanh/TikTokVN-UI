import Tippy from '@tippyjs/react/headless';
import styles from './menu.module.scss';
import classNames from 'classnames/bind';
import { ProperWrapper } from '..';
import Button from '~/Components/Button';
import Menuitems from './MenuItems';
import Header from './header';
import { useState } from 'react';

const cx = classNames.bind(styles);
const DefaultFn = () => {};

function Menu({ children, items = [], onChange = DefaultFn, hideOnClick = true }) {
    //tao mot cai history goc
    const [history, setHistory] = useState([{ data: items }]);
    //luon luon ow sau thang lon nhat
    const current = history[history.length - 1];
    console.log(history);

    const renderMenuItems = () => {
        return current.data.map((menuItem, index) => {
            const isParent = !!menuItem.children;

            return (
                <Menuitems
                    key={index}
                    data={menuItem}
                    onClick={() => {
                        if (isParent) {
                            // khi bam vao thi set lai history
                            setHistory((prev) => [...prev, menuItem.children]);
                        } else {
                            onChange(menuItem);
                        }
                    }}
                />
            );
        });
    };
    return (
        <div>
            <Tippy
                interactive
                placement={'bottom-end'}
                delay={[0, 700]}
                hideOnClick={hideOnClick}
                render={(attrs) => (
                    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                        <ProperWrapper className={cx('menu-proper')}>
                            {history.length > 1 && (
                                <Header
                                    title={current.title}
                                    onBack={() => {
                                        setHistory((prev) => prev.slice(0, prev.length - 1));
                                    }}
                                />
                            )}
                            <div className={cx('menu-body')}>{renderMenuItems()}</div>
                        </ProperWrapper>
                    </div>
                )}
                onHide={() => {
                    setHistory((prev) => prev.slice(0, 1));
                }}
            >
                {children}
            </Tippy>
        </div>
    );
}

export default Menu;
