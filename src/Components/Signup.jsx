import { Link, json } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import '../Styles/Signup.css';

const { useRef } = require("react");



const Signup = ()=>{

    let navigate = useNavigate();

    let name = useRef();
    let email = useRef();
    let phone = useRef();
    let pwd = useRef();


    (()=>{ 
        if( !localStorage.getItem("users") )
        {
             localStorage.setItem("users" , "[]")
        }
     })()

    let r = localStorage.getItem("users");
    let user =  JSON.parse(r);

    let handleuser =(e)=>
    {
        e.preventDefault();
        let Userdata = user.some((u)=>{ return u.name==name.current.value});
        if(Userdata == true)
        {
            alert("User already exsist...Please login to continue !!!");
            navigate("/login");
        }
        else{
            let newuser = {
                name : name.current.value,
                email : email.current.value,
                phoneno : phone.current.value,
                password : pwd.current.value
            }

             user.push(newuser);
           localStorage.setItem("users",JSON.stringify(user));

           alert("sign up successfull  !!!");
           navigate("/login");

        }

    }


    return (

        <div className="signup-body">
        <div className="signup-box">
            <form onSubmit={handleuser} className="signup-form">
            <h2>Signup</h2>
           <div className="inputbox">
            <input type="text" ref={name} required/>
            <span>Username</span>
            <i></i>
           </div>
           <div className="inputbox">
            <input type="email" ref={email} required/>
            <span>Email</span>
            <i></i>
           </div>
           <div className="inputbox">
            <input type="tel" minLength="10" maxLength="10" ref={phone}  required/>
            <span>Mobile no</span>
            <i></i>
           </div>
           <div className="inputbox">
            <input type="password" ref={pwd} required/>
            <span>Password</span>
            <i></i>
           </div>
           <div className="links">
             <Link to="/login">Login</Link>
           </div>
           <input type="submit" value="Sign up" />
            </form>
        </div>
        </div>
    )
}
   
export default Signup;