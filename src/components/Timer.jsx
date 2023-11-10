import React, { useState } from 'react'

// Description :
// Implement a Stopwatch/timmer as shown below with start ,stop and reset button.

const Timer = () => {
    const [timer, setTimer] = useState(0);

    const startTimer = () => {
        window.myTimer = setInterval(() => {
          setTimer((timer) => timer + 1);
        }, 1000);
      };
      const stopTimer = () => {
        clearInterval(window.myTimer);
      };
      const resetTimer = () => {
        clearInterval(window.myTimer);
        setTimer(0);
      };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Timer</h1>
            <div className="text-xl mb-4">
                <span>{Math.trunc(timer / 60)} mins </span>
                <span>{timer % 60} secs</span>
            </div>
            <div>
                <button onClick={startTimer} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Start</button>
                <button onClick={stopTimer} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2">Stop</button>
                <button onClick={resetTimer} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Reset</button>
            </div>
        </div>
    );

}

export default Timer



// import React, { useState, useRef } from 'react';

// const Timer = () => {
//   const [isRunning, setIsRunning] = useState(false);
//   const [elapsedTime, setElapsedTime] = useState(0);
//   const timerRef = useRef(null);

//   const startTimer = () => {
//     if (!isRunning) {
//       setIsRunning(true);
//       timerRef.current = setInterval(() => {
//         setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
//       }, 1000); // Update elapsed time every second (1000ms)
//     }
//   };

//   const stopTimer = () => {
//     if (isRunning) {
//       setIsRunning(false);
//       clearInterval(timerRef.current);
//     }
//   };

//   const resetTimer = () => {
//     setIsRunning(false);
//     clearInterval(timerRef.current);
//     setElapsedTime(0);
//   };

//   // Convert elapsed seconds to hours, minutes, and seconds
//   const formatTime = (seconds) => {
//     const hours = Math.floor(seconds / 3600);
//     const minutes = Math.floor((seconds % 3600) / 60);
//     const remainingSeconds = seconds % 60;

//     const formatNumber = (num) => (num < 10 ? `0${num}` : num);

//     return `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(remainingSeconds)}`;
//   };

//   return (
//     <div className='items-center flex-col'>
//       <div className='flex items-center justify-center'>
//         <button className='bg-blue-400 rounded-lg m-2 p-2 font-bold shadow-xl bg-gradient-to-tr' onClick={startTimer}>
//           Start
//         </button>
//         <button className='bg-blue-400 rounded-lg m-2 p-2 font-bold shadow-xl bg-gradient-to-tr' onClick={stopTimer}>
//           Stop
//         </button>
//         <button className='bg-blue-400 rounded-lg m-2 p-2 font-bold shadow-xl bg-gradient-to-tr' onClick={resetTimer}>
//           Reset
//         </button>
//       </div>
//       <div className='flex items-center justify-center'>
//         <h1 className='text-9xl'>{formatTime(elapsedTime)}</h1>
//       </div>
//     </div>
//   );
// };

// export default Timer;
