import "../styles/login.css";
import { useState, useEffect} from "react";
import axios from "axios";

export default function LoginPage({history}){

    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    const submitForm = (e) => {
        e.preventDefault();
        
        const data = { username, password};
        axios.post("http://localhost:5000/login", data)
            .then((result) => console.log(result));
        
        history.push("/");
    }

    return(
        <div className="form_container">
            <form className="form">
                <h1 className="form_title">LOGIN</h1>
                <div className="form-group">
                    <label name="username">Username</label>
                    <input onChange={e => setUsername(e.target.value)} placeHolder="Enter username" className="form-control form_input" name="username" type="text"/>
                </div>
                <div className="form-group">
                    <label name="password">Password</label>
                    <input onChange={e => setPassword(e.target.value)} placeHolder="Enter password" className="form-control form_input" name="password" type="password"/>
                </div>
                <button onClick={submitForm} className="btn tw_btn">Login</button>
            </form>
        </div>
    )
}