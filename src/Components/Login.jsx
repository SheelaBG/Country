import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Login.css";

const Login = ()=>{

    let mail = useRef();
    let pwd = useRef();

    let nav = useNavigate();

    function validate()
    {
        let email = mail.current.value;
        let password = pwd.current.value;
    
    
    let user = localStorage.getItem("users");
    user = JSON.parse(user);
    console.log(user);

    let userdetails;

    for (let i = 0; i < user.length; i++) {
      
        if(user[i].email.includes(email))
        {
            userdetails = user[i];
            break;
        }
    }
    console.log(userdetails);

    if(userdetails == undefined)
    {
        alert("user does not exist !!!")
    }
   else if( userdetails.password != password )
    {
         alert("Wrong password... please enter valid password !!!")
    }
    else
    {
        alert("login successfully !!!")
        localStorage.setItem("currentuser",JSON.stringify(userdetails));
         nav("/home");
    }
    
    }


    return(
        <div className="login-body">
        <div className="login-box">
            <form onSubmit={validate} className="login-form">
            <h2>Login</h2>

           <div className="l-inputbox">
            <input type="email" ref={mail} required/>
            <span>Email</span>
            <i></i>
           </div>
           <div className="l-inputbox">
            <input type="password" ref={pwd} required/>
            <span>Password</span>
            <i></i>
           </div>
           <div className="l-links">
             <Link to="/">Sign up</Link>
           </div>
           <input type="submit" value="Login" />
            </form>
        </div>
        </div>
    )
}

export default Login;