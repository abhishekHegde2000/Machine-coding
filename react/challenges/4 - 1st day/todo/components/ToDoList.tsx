/*

Here's another TypeScript React coding question:

### TypeScript React Coding Question 3:

**Task:** Create a React component called `TodoList` that displays a list of todo items.

**Requirements:**
- The component should accept a prop called `todos` which is an array of todo items.
- Each todo item should have a `text` property of type `string` representing the todo item text.
- Display each todo item as a list item (`<li>`) inside an unordered list (`<ul>`).
- If the `todos` array is empty, display a message indicating that there are no todos.
- If the `todos` array is not empty, display each todo item text inside a list item.
- Use TypeScript for type safety.

**Example:**
```tsx
const todos = [
  { text: 'Buy groceries' },
  { text: 'Finish homework' },
];

<TodoList todos={todos} />
```
Output:
```
- Buy groceries
- Finish homework
```

```tsx
const todos = [];

<TodoList todos={todos} />
```
Output:
```
No todos yet.
```

**Solution:** (To be implemented by you!)

*/

type ToDo = {
    text: string;
};

interface ToDoListProps {
    ToDoArray: ToDo[];
}

export function ToDoList({ ToDoArray }: ToDoListProps) {
    return (
        <ul>
            {ToDoArray.length > 0 ? (
                ToDoArray.map((todo, index) => <li key={index}>{todo.text}</li>)
            ) : (
                <li>No todos yet.</li>
            )}
        </ul>
    );
}
