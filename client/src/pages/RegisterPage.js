import "../styles/register.css";

export default function RegisterPage(){
    return(
        <div className="form_container"> 
            <form className="form">
                 <h1>REGISTER</h1>
                <div className="form-group">
                    <label name="email">Email</label>
                    <input placeHolder="Enter email" className="form-control form_input" name="email" type="email"/>
                </div>
                <div className="form-group">
                    <label name="username">Username</label>
                    <input placeHolder="Enter username" className="form-control form_input" name="username" type="text"/>
                </div>
                <div className="form-group">
                    <label name="password">Password</label>
                    <input placeHolder="Enter password" className="form-control form_input" name="password" type="password"/>
                </div>
                <button className="btn tw_btn">Register</button>
            </form>
        </div>
    )
}