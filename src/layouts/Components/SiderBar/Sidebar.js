import styles from './sidebar.module.scss';
import classNames from 'classnames/bind';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    UserGroupIcon,
    LiveIcon,
    HomeActiveIcon,
    UserGroupActiveIcon,
    LiveActiveIcon,
} from '~/Components/Icons';
import SuggestedAccount from '~/Components/SuggestedAccount';
import SuggestedAccountFollowingItem from '~/Components/FollowingAccount';
const cx = classNames.bind(styles);
function SideBar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For you"
                    to={config.routesConfig.home}
                    icon={<HomeIcon />}
                    iconActive={<HomeActiveIcon />}
                />
                <MenuItem
                    title="Following"
                    to={config.routesConfig.following}
                    icon={<UserGroupIcon />}
                    iconActive={<UserGroupActiveIcon />}
                />
                <MenuItem
                    title="Live"
                    to={config.routesConfig.live}
                    icon={<LiveIcon />}
                    iconActive={<LiveActiveIcon />}
                />
            </Menu>

            <SuggestedAccount label={'Suggested Account'} />
            <SuggestedAccountFollowingItem label={'Following Account'} />
        </aside>
    );
}
export default SideBar;
