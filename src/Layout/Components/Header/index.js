import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSignIn, faSpinner } from '@fortawesome/free-solid-svg-icons';

import styles from './header.module.scss';
import images from '~/src/assets/images';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';
import { ProperWrapper } from '~/Layout/Proper';
import AccountItems from '~/Components/AccountItem';
import Button from '~/Components/Button';
import { href } from 'react-router-dom';

const cx = classNames.bind(styles);

function Header() {
    const [resultVisisble, setResultVisible] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setResultVisible([1, 2, 3]);
        }, 1000);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok" />
                <Tippy
                    interactive
                    visible={resultVisisble}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <ProperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItems />
                                <AccountItems />
                                <AccountItems />
                                <AccountItems />
                            </ProperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    <Button text>Upload</Button>
                    <Button primary >
                        Log in
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
