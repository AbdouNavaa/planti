import React ,{useState, useEffect}from 'react'
import './Login.css'
import video from '../../LoginAssets/video.mp4'
import logo from '../../LoginAssets/loo7.jpeg'
import { Link ,useNavigate} from 'react-router-dom'
import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'
import '../../App.css'
import  Axios  from "axios";

const Login = () => {
    const [Loginusername, setLoginUsername] = useState('')
    const [Loginpassword, setLoginPassword] = useState('')
    const navigateTo = useNavigate()

    // let us now show the message to user
    const [loginStatus, setLoginStatus] = useState('')
    const [statusHolder, setStatusHolder] = useState('message')
    
    const loginUser = (e)=>{
        e.preventDefault();
        // we shall require Axios to create an API that connects to the server 
        Axios.post('http://localhost:3002/login',{
            // create variable to send to the server through the route
            LoginUsername:Loginusername,
            LoginPassword:Loginpassword
        }).then((response)=>{
            if (response.data.message || Loginusername =='' || Loginpassword =='') {
                // if credential dont match
                navigateTo('/')//so we shall navigate to the same login page
                setLoginStatus(`Credentials D'ont Exist!`)
            } else {
                navigateTo('/dashboard')//if the credential match we shall navigate to the dashboard
            }
            
        })
    }

    useEffect(() => {
        if (loginStatus !== '') {
            setStatusHolder('showMessage')
            setTimeout(() => {
                setStatusHolder('message')
            }, 4000);
        }

    }, [loginStatus])
    
    // clear the form on submit
    const onSubmit = ()=>{
        setLoginUsername('')
        setLoginPassword('')
    }
    return (
        <div className='loginPage flex'>
            <div className="container flex">
                <div className="videoDiv">
                    <video src={video} autoPlay muted loop></video>

                    <div className="textDiv">
                        <h2 className="title">
                            Create And Sell Extraordinery Products
                        </h2>
                        <p>Adopt the peace of nature!</p>
                    </div>

                    <div className="footerDiv flex">
                        <span className="text">
                            Don't have any account?
                        </span>
                        <Link to={'/register'}>
                        <button className="btn">
                            Sign Up</button></Link>
                    </div>
                </div>

                <div className="formDiv flex">
                    <div className="headerDiv">
                        <img src={logo} alt="Logo Image" />
                        <h3>Welcome Back!</h3>
                    </div>

                    <form className="form grid" onSubmit={onSubmit}>
                        <span className={statusHolder}>{loginStatus}</span>
                        <div className="inputDiv">
                            <label htmlFor="username">Username</label>
                            <div className="input flex">
                                <FaUserShield  className='icon'/>
                                <input type="text" id='username' placeholder='Enter Usernaem'                                onChange={(event) =>{
                                    setLoginUsername(event.target.value)
                                }}/>
                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="password">Password</label>
                            <div className="input flex">
                                <BsFillShieldLockFill  className='icon'/>
                                <input type="password" id='password' placeholder='Enter Password'                                 onChange={(event) =>{
                                    setLoginPassword(event.target.value)
                                }}/>
                            </div>
                        </div>

                        <button type='submit' className='btn flex' onClick={loginUser}>
                            <span>Login</span>
                            <AiOutlineSwapRight className='icon'/>
                        </button>


                        <span className="forgotPassword">
                            Forgot your password? <a href="">Click Here</a>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login