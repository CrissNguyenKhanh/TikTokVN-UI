import { faCircleXmark, faL, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { ProperWrapper } from '~/Layout/Proper';
import AccountItems from '~/Components/AccountItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState, useRef } from 'react';
import styles from './search.module.scss';
import classNames from 'classnames/bind';
import { useDebounce } from '~/hooks';
import * as SearchApi from '~/ApiService/serachSevice';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [resultValue, setResultValue] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const searchDebounce = useDebounce(searchValue, 500);

    const inputRef = useRef();

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };
    const handleChange = (e) => {
        let value = e.target.value;

        // Nếu ký tự đầu tiên là space thì xóa nó
        if (value.startsWith(' ')) {
            return;
        }

        setSearchValue(value);
    };

    const handleClick = (e) => {
        e.preventeDefault();
    };
    //gap chuoi rong se tu return ko chay xuong api
    useEffect(() => {
        if (!searchDebounce.trim()) {
            setResultValue([]);
            return;
        }
        setLoading(true);
        const fetchApi = async () => {
            setLoading(false);
            const res = await SearchApi.searchApi(searchDebounce);
            setResultValue(res);
            setLoading(false);
        };
        fetchApi();
    }, [searchDebounce]);

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <div>
            <HeadlessTippy
                interactive
                appendTo={() => document.body}
                visible={showResult && resultValue.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <ProperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {resultValue.map((result) => (
                                <AccountItems key={result.id} data={result} />
                            ))}
                        </ProperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
