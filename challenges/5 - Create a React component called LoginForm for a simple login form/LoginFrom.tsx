import React, { useState } from "react";

const LoginForm: React.FC = () => {
    type FormData = {
        username: string;
        password: string;
    };

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [formData, setFormData] = useState<FormData>({
        username: "",
        password: "",
    });
    console.log(formData);

    const handleUsernameChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log("Username:", username);
        console.log("Password:", password);
        // You can perform further actions here, like sending data to a server
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default LoginForm;
