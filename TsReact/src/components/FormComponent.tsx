
import type React from "react";
import { useState } from "react";

interface User {
    name: string,
    email: string,
    mobile_no: number,
    password: number
}

const FormComponent = () => {

    const [user, setUser] = useState<User>({
        name: "",
        email: "",
        mobile_no: 0,
        password: 0
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(user);
    }

    return (
        <div>
            <h1>Form Component</h1>
            <form onSubmit={handleSubmit}>

                <label>Enter Your name : </label>
                <input
                    type="text"
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                />

                <br /><br />

                <label>Enter Your Email : </label>
                <input
                    type="text"
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                />

                <br /><br />

                <label>Enter Your mobile No. : </label>
                <input
                    type="number"
                    onChange={(e) => setUser({ ...user, mobile_no: Number(e.target.value) })}
                />

                <br /><br />

                <label>Enter Your password : </label>
                <input
                    type="number"
                    onChange={(e) => setUser({ ...user, password: Number(e.target.value) })}
                />

                <br /><br />

                <button type="submit">Submit form</button>
            </form>
        </div>
    )
}

export default FormComponent;
