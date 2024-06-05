/*
Question 1: Create a Simple React Component
Task: Create a React component called Greeting that displays a greeting message.

Requirements:

The component should accept a prop called name.
If name is provided, the component should display a greeting message including the name.
If name is not provided, the component should display a generic greeting message.
Example:

jsx
Copy code
<Greeting name="John" />
Output: "Hello, John!"

jsx
Copy code
<Greeting />
Output: "Hello, there!"
*/

const Greeting = ({ name }: { name: string }) => {
    return <div>{name ? <h1>Hello, {name}!</h1> : <h1>Hello, there!</h1>}</div>;
};

export default Greeting;
