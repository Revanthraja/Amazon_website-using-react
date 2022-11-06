import React, { useState } from 'react'
import { Link,useHistory} from 'react-router-dom'
import { auth } from './firebase';
import './Login.css'

function Login() {
    const histroy=useHistory()
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const signIn  =e=>{
        e.preventDefault();
        //some fancy firebase
        auth
            .signInWithEmailAndPassword(email,password)
            .then(auth=>{
                histroy.push('/')
            })
            .catch(error=>alert(error.message))

    }
    const register =e=>{
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            console.log(auth);
            if (auth){
                histroy.push('/')
            }
        })
        .catch(error=>alert(error.message))
    }
  return (
    <div className='login'>
        <Link to ='/'>
        <img className='login__logo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'/>
        </Link>   
        <div className='login__continer'>
            <h1>Sign-in</h1>
            <form>
                <h5> E-mail</h5>
                <input type="text" value={email}
                 onChange={e=>setEmail(e.target.value)}
                 />
                <h5>Password</h5>
                <input type="password" value={password} 
                onChange={e=>setPassword(e.target.value)}/>
                <button type='submit' onClick={signIn} 
                className='login__signinbutton'> Sign In</button>
            </form>
                <p>
                    By signing-in you agree to the
                     AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, 
                    our Cookies Notice and our 
                    Interest-Based Ads Notice.
                </p>

                <button type='submit' onClick={register}
                 className='login__registerbutton'> Create your amazon account</button>

        </div> 
        

    </div>
  )
}

export default Login