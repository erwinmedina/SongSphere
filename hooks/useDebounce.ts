import { useEffect, useState } from "react";

// Only gets the result after 500ms if the user isn't typing anything. That way we don't reuse api calls //

function useDebounce<T>(value: T, delay?: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value)
        }, delay || 500)

        return () => {
            clearTimeout(timer);
        }
    }, [value, delay]);

    return debouncedValue;
}

export default useDebounce;