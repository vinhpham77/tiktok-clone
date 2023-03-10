import { useEffect, useRef, useState } from 'react';
import TippyHeadless from '@tippyjs/react/headless';
import { PopperWrapper } from '~/components/poppers';
import AccountItem from '~/components/AccountItem';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';
import { LoaderIcon, SearchIcon, XCircleIcon } from '~/components/icons';
import { search } from '~/services/searchService.js';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const inputRef = useRef();
    const [inputValue, setInputValue] = useState('');
    const [isResultShown, setIsResultShown] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const debounceValue = useDebounce(inputValue, 700);

    const handleClearingSearch = () => {
        setInputValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHidingResult = () => {
        setIsResultShown(false);
    };

    const handleChanging = (e) => {
        let searchValue = e.target.value;

        if (searchValue.startsWith(' ')) {
            return;
        } else {
            setInputValue(searchValue);
        }
    };

    const handleSubmitting = (e) => {
        inputRef.current.blur();
        e.preventDefault();
    };

    useEffect(() => {
        if (!debounceValue.trim()) {
            setSearchResult([]);
            return;
        }

        setIsLoading(true);
        const fetchAPI = async () => {
            setIsLoading(true);
            let result;

            try {
                result = await search(debounceValue);
            } catch (error) {
                result = [];
                console.error(error);
            } finally {
                setIsLoading(false);
                setSearchResult(result);
            }
        };

        fetchAPI();
    }, [debounceValue]);

    return (
        // Interactive tippy element may not be accessible via keyboard navigation
        // because it is not directly after the reference element in the DOM source order

        // Using a wrapper <div> or <span> tag around the reference element solves this
        // by creating a new parentNode context.
        <div>
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
                        onChange={handleChanging}
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
                    <button className={cx('search-btn')} onMouseDown={handleSubmitting}>
                        <SearchIcon />
                    </button>
                </div>
            </TippyHeadless>
        </div>
    );
}

export default Search;
