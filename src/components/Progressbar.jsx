import React, { useState } from 'react';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const increaseProgress = () => {
    setProgress(oldProgress => Math.min(oldProgress + 10, 100));
  }

  const decreaseProgress = () => {
    setProgress(oldProgress => Math.max(oldProgress - 10, 0));
  }

  const handleInputChange = (e) => {
    const newValue = parseInt(e.target.value);
    if (newValue >= 0 && newValue <= 100) {
      setProgress(newValue);
    }
  }

  return (
    <div>
      <button onClick={increaseProgress}>Up</button>
      <button onClick={decreaseProgress}>Down</button>
      <input type="number" value={progress} onChange={handleInputChange} min="0" max="100" />
      <progress value={progress} max="100" />
      <p>{progress}%</p>
    </div>
  );
};

export default ProgressBar;