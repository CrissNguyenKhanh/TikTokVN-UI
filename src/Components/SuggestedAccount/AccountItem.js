import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './suggestedAccount.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import { ProperWrapper } from '~/layouts/Proper';
import AccountPreview from './AccountPreview';
const cx = classNames.bind(styles);
function AccountItem({ avatar, nickname, name }) {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <ProperWrapper>
                    <AccountPreview />
                </ProperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[800, 0]} placement="bottom" render={renderPreview} offset={[-20, 0]}>
                <div className={cx('account-item')}>
                    <img className={cx('avatar')} src={avatar} alt={nickname} />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>{nickname}</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('display')}>{name}</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}
AccountItem.propTypes = {};
export default AccountItem;
