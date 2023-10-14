import React, {useState} from 'react'
import './Login.css'
import axios from 'axios';
import { useNavigate ,Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import logo from '../imgs/HMP-logo.png'

function Login() {
    const navigate = useNavigate()
    const {dispatch} = useAuthContext()
    const [email, setEmail] = useState();
   const [password, setPassword] = useState();
   const [errorMessage, setErrorMessage] = useState("");

    async function handleSubmit(event) {
        const data = {
            email:email,
            password:password
        }
        event.preventDefault()
        axios.post('https://d4f3-103-137-94-219.ngrok-free.app/api/login/',{
            email:"om@gmail.com",
            password:"1234"
        })
        .then(response => {
            console.log(response.data);
            setErrorMessage("");
            localStorage.setItem("user", JSON.stringify(response.data));
            dispatch({type:"LOGIN",payload: response.data})
            navigate('../dashboard')
        })
        .catch((err) => {console.log(err.message);setErrorMessage("Incorrect details")});
      }
  return (
    <div className='login-wrapper'>
        <nav className='navbar'>
            <img src={logo} onClick={()=>navigate('../')} alt="Logo"/>
            <div className='navbar-buttons'>
            </div>
        </nav>
        <div className="content-wrapper">
            <div className="login-form-container">
                <form className='login-form'>
                    <h1>Login</h1>
                    <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                    <p 
                    style={{color:"red"}}>
                        {errorMessage==="ok"?"Signup Successfull, Please login":errorMessage}
                    </p>
                    <div>
                        <Link>Forget Password?</Link>
                    </div>
                    <button onClick={e=>handleSubmit(e)}>Login</button>
                    <div className='login-subtitle'><p>New Here?</p><Link to='/signup'>Signup</Link></div>
                </form>
            </div>
        </div>
        
    </div>
  )
}

export default Login