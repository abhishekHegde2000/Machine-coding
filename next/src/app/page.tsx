// pages/index.js

import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";

export default function Home() {
    const [timer, setTimer] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    const startTimer = () => {
        setIsRunning(true);
        intervalRef.current = setInterval(() => {
            setTimer((prevTimer) => prevTimer + 1);
        }, 1000);
    };

    const stopTimer = () => {
        clearInterval(intervalRef.current);
        setIsRunning(false);
    };

    const resetTimer = () => {
        clearInterval(intervalRef.current);
        setTimer(0);
        setIsRunning(false);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}`;
    };

    return (
        <>
            <div className="flex justify-center mt-8">
                <div className="border border-gray-300 rounded-md px-4 py-2 mx-2">
                    {formatTime(timer)}
                </div>
            </div>
            <div className="flex justify-center mt-4">
                <Button
                    className="gap-2 p-3 text-center m-2 border-2"
                    onClick={startTimer}
                    disabled={isRunning}
                >
                    Start
                </Button>
                <Button
                    className="gap-2 p-3 text-center m-2 border-2"
                    onClick={stopTimer}
                    disabled={!isRunning}
                >
                    Stop
                </Button>
                <Button
                    className="gap-2 p-3 text-center m-2 border-2"
                    onClick={resetTimer}
                >
                    Reset
                </Button>
            </div>
        </>
    );
}
