// Child.tsx
const Child = ({ sendData }: { sendData: (data: Number) => void }) => {
    const handleClick = () => {
        sendData(1000);
    };

    return (
        <div>
            Child component
            <button onClick={handleClick}>click to send data to parent</button>
        </div>
    );
};

export default Child;
