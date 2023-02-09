import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
    const [bouncedValue, setBouncedValue] = useState(value);

    useEffect(() => {
        const timerID = setTimeout(() => setBouncedValue(value), delay);

        return () => clearTimeout(timerID);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return bouncedValue;
}

export default useDebounce;
