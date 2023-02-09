import { useEffect, useRef, useState } from 'react';
import TippyHeadless from '@tippyjs/react/headless';
import { PopperWrapper } from '~/components/poppers';
import AccountItem from '~/components/AccountItem';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';
import { LoaderIcon, SearchIcon, XCircleIcon } from '~/components/icons';
import { search } from '~/apiServices/searchServices.js';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const inputRef = useRef();
    const [inputValue, setInputValue] = useState('');
    const [isResultShown, setIsResultShown] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const debouncer = useDebounce(inputValue, 700);

    const handleClearingSearch = () => {
        setInputValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHidingResult = () => {
        setIsResultShown(false);
    };

    useEffect(() => {
        if (!debouncer.trim()) {
            setSearchResult([]);
            return;
        }

        setIsLoading(true);
        const fetchAPI = async () => {
            setIsLoading(true);
            const result = await search(debouncer);
            setIsLoading(false);
            setSearchResult(result);
        };

        fetchAPI();
    }, [debouncer]);

    return (
        <TippyHeadless
            interactive
            visible={isResultShown && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <p className={cx('accounts-title')}>Accounts</p>
                        {searchResult.map((result) => {
                            return <AccountItem key={result.id} data={result} />;
                        })}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHidingResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={inputValue}
                    spellCheck="false"
                    placeholder="Search accounts and videos"
                    onChange={(e) => setInputValue(e.target.value)}
                    onFocus={() => setIsResultShown(true)}
                />

                {!isLoading && (
                    <button className={cx('search-clear')} onClick={handleClearingSearch}>
                        <XCircleIcon />
                    </button>
                )}
                {isLoading && (
                    <p className={cx('search-loader', 'hide')}>
                        <LoaderIcon />
                    </p>
                )}
                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </TippyHeadless>
    );
}

export default Search;
