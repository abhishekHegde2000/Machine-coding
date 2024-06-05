import Accordion from "./Accordion";

const App = () => {
    return (
        <div>
            <Accordion
                items={[
                    { title: "Section 1", content: "Content for section 1" },
                    { title: "Section 2", content: "Content for section 2" },
                    { title: "Section 3", content: "Content for section 3" },
                ]}
            />
        </div>
    );
};

export default App;
