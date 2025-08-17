import classNames from 'classnames/bind';
import styles from './suggestedAccount.module.scss';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';
import { useState } from 'react';

const cx = classNames.bind(styles);

function SuggestedAccount({ label }) {
    // mock data, sau này thay bằng API
    const [listSuggest, setListSuggest] = useState([
        { id: 1, avatar: 'https://i.pravatar.cc/50', nickname: 'khanhnq.it', name: 'Nguyễn Quốc Khánh' },
    ]);

    const handleSetList = () => {
        setListSuggest((prev) => [
            ...prev,
            { id: 2, avatar: 'https://i.pravatar.cc/51', nickname: 'user1', name: 'Nguyễn Văn A' },
            { id: 3, avatar: 'https://i.pravatar.cc/52', nickname: 'user2', name: 'Trần Thị B' },
            { id: 4, avatar: 'https://i.pravatar.cc/53', nickname: 'user3', name: 'Lê Văn C' },
        ]);
    };

    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            {listSuggest.map((account) => (
                <AccountItem
                    key={account.id}
                    avatar={account.avatar}
                    nickname={account.nickname}
                    name={account.name}
                />
            ))}

            <p onClick={handleSetList} className={cx('see-more')}>
                See all
            </p>
        </div>
    );
}

SuggestedAccount.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccount;
