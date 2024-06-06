import React, { useState, useRef } from "react";
import ParentComponent from "./components/ParentComponent";

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
            <ParentComponent />
        </div>
    );
}

export default App;
