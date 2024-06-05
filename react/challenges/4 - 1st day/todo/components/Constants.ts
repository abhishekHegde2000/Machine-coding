type ToDoType = {
    text: string;
};

interface TodoInterface {
    text: string;
}

export let todos: { text: string }[] = [
    { text: "Buy groceries" },
    { text: "Finish homework" },
];

export let ToDostype: ToDoType[] = [
    { text: "Buy groceries" },
    { text: "Finish homework" },
];

export let todosInterface: TodoInterface[] = [
    { text: "Buy groceries" },
    { text: "Finish homework" },
];

export default todos;
