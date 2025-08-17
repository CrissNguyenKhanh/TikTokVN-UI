import classNames from 'classnames/bind';
import styles from './suggestedAccount.module.scss';

import PropTypes from 'prop-types';
import AccountItem from './AccountItem';
const cx = classNames.bind(styles);

function SuggestedAccount({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
           

            <p className={cx('see-more')}>See all</p>
        </div>
    );
}
SuggestedAccount.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccount;
