import "../styles/register.css";
import { useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function RegisterPage({history}){

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submitForm = (e) => {
        e.preventDefault();

        const data = {email, username, password};

        axios.post("http://localhost:5000/register", data)
            .then(result => console.log(result))

        history.push('/login');
    }

    return(
        <div className="form_container"> 
            <form className="form">
                <h1 className="form_title">REGISTER</h1>
                <div className="form-group">
                    <label name="email">Email</label>
                    <input onChange={e => setEmail(e.target.value)} placeHolder="Enter email" className="form-control form_input" name="email" type="email"/>
                </div>
                <div className="form-group">
                    <label name="username">Username</label>
                    <input onChange={e => setUsername(e.target.value)} placeHolder="Enter username" className="form-control form_input" name="username" type="text"/>
                </div>
                <div className="form-group">
                    <label name="password">Password</label>
                    <input onChange={e => setPassword(e.target.value)} placeHolder="Enter password" className="form-control form_input" name="password" type="password"/>
                </div>
                <button onClick={submitForm} className="btn tw_btn">Register</button>
                <Link to="/login"><button className="btn tw_btn mt-2">Login Page</button></Link>
            </form>
        </div>
    )
}