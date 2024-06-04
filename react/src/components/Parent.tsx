import Child from "./Child";

// Parent.tsx
const Parent = () => {
    const handleData = (data: Number) => {
        console.log(data); // or do something with the data
    };

    return (
        <div>
            Parent
            <Child sendData={handleData} />
        </div>
    );
};

export default Parent;
