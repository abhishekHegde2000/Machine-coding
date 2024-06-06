/*
Here's another TypeScript React coding question:

### TypeScript React Coding Question 2:

**Task:** Create a React component called `Counter` that displays a counter with increment and decrement buttons.

**Requirements:**
- The component should maintain an internal state for the counter value.
- It should display the current counter value.
- It should have two buttons: one for incrementing the counter value and one for decrementing it.
- Clicking the increment button should increase the counter value by 1.
- Clicking the decrement button should decrease the counter value by 1.

**Example:**
```tsx
<Counter />
```
Output: 
```
Counter: 0
[Increment] [Decrement]
```

**Solution:** (To be implemented by you!)
*/

import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <h1>{count}</h1>
        </div>
    );
};

export default Counter;
