import classNames from 'classnames/bind';
import styles from './suggestedAccountFollowingItem.module.scss';

import PropTypes from 'prop-types';
import AccountFollowingItem from './AccountFollowingItem';
const cx = classNames.bind(styles);

function SuggestedAccountFollowingItem({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AccountFollowingItem />
            <AccountFollowingItem />
            <AccountFollowingItem />
            <AccountFollowingItem />

            <p className={cx('see-more')}>See all</p>
        </div>
    );
}
SuggestedAccountFollowingItem.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccountFollowingItem;
