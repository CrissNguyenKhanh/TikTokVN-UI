import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Image from '~/Components/Images';
import styles from './header.module.scss';
import images from '~/Components/assets/images';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Button from '~/Components/Button';
import Menu from '~/Layout/Proper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/Components/Icons';
import Search from '../search';
import routesConfig from '~/config/routes';

const cx = classNames.bind(styles);

const handleOnchange = (menuItem) => {
    console.log(menuItem);
};
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        //đi sâu vào vấn đề khi mà click một trong 2 item thì nó sẽ bám theo cái index đó
        children: {
            title: 'language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'VietNam',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'FeedBack and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'keyboard shortcuts',
    },
];
const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View Profile',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get Coin',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Setting',
        to: '/setting',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'logout',
        to: '/logout',
        separate: true,
    },
];

function Header() {
    const currentUser = true;

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routesConfig.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy offset={[16, 8]} delay={[0, 200]} content="UpLoad Video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleOnchange} hideOnClick={false}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://sm.ign.com/ign_pk/cover/a/avatar-gen/avatar-generations_rpge.jpg"
                                alt="nguyen van a"
                                fallBack="https://files.fullstack.edu.vn/f8-prod/user_avatars/18159/6466353972973.jpg"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
