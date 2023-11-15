import React, { useState, useEffect } from 'react';

const MaxCount = () => {
    const [seconds, setSeconds] = useState(10);
    const [count, setCount] = useState(0);
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        if (seconds === 0) {
            setIsDisabled(true);
        }

        const timerInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
        }, 1000);

        return () => clearInterval(timerInterval);
    }, [seconds]);

    const handleButtonClick = () => {
        if (!isDisabled) {
            setCount(count + 1);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="text-4xl font-bold mb-4">Timer: {seconds} seconds</div>
            <div className="text-2xl font-bold mb-4">Count: {count}</div>
            <button
                className={`py-2 px-4 rounded-lg ${isDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'} text-white font-bold`}
                disabled={isDisabled}
                onClick={handleButtonClick}
            >
                Increase Count
            </button>
        </div>
    );
};

export default MaxCount;