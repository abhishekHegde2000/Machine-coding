import React, { useState, useRef } from "react";

function App() {
    const [timer, setTimer] = useState(0);
    const myTimer = useRef<NodeJS.Timeout | null>(null);

    const startTimer = () => {
        myTimer.current = setInterval(() => {
            setTimer((timer) => timer + 1);
        }, 1000);
    };

    const stopTimer = () => {
        if (myTimer.current) {
            clearInterval(myTimer.current);
        }
    };

    const resetTimer = () => {
        if (myTimer.current) {
            clearInterval(myTimer.current);
        }
        setTimer(0);
    };

    return (
        <div className="container">
            <h1 className="text-4xl font-bold mb-4">Timer</h1>
            <div className="flex items-center mb-4">
                <span className="text-2xl mr-2">
                    {Math.trunc(timer / 60)} mins
                </span>
                <span className="text-2xl">{timer % 60} secs</span>
            </div>
            <div className="flex">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                    onClick={startTimer}
                >
                    Start
                </button>
                <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                    onClick={stopTimer}
                >
                    Stop
                </button>
                <button
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    onClick={resetTimer}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default App;
