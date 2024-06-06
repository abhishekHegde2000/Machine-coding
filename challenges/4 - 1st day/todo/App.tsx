import { todosInterface } from "./components/Constants";
import { ToDoList } from "./components/ToDoList";

const App = () => {
    let todosFromApp = todosInterface;
    console.log(todosFromApp);
    return (
        <div className="text-bold min-h-screen bg-blue-500 text-white flex items-center justify-center">
            <div className="text-2xl">
                <ToDoList ToDoArray={todosFromApp} />
            </div>
        </div>
    );
};

export default App;
