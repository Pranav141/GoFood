import React,{useState} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Link,useNavigate } from 'react-router-dom'
export default function Login() {
  const navigate=useNavigate();
  const [credentials, setCredentials] = useState({email:"",password:""})
    const handleSubmit=async (e)=>{
        e.preventDefault()
        const response=await fetch("http://localhost:5000/api/loginuser",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({email:credentials.email,password:credentials.password})
        })
        const json =await response.json();
        // console.log(json);
        if(!json.success){
          alert('Please Enter Correct Credentials');
          
        }
        if(json.success){
          localStorage.setItem('userEmail',credentials.email);
          localStorage.setItem('authToken',json.authToken);
          navigate('/');
        }
    }
    const onChange=(event)=>{
        setCredentials({...credentials,[event.target.name]:event.target.value})
    }
  return (
    <div>
        <Navbar/>
        <div className="container mt-4">
            <form onSubmit={handleSubmit}>
                
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name='email' value={credentials.value} onChange={onChange} aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name='password' onChange={onChange} value={credentials.password}/>
                </div>
                
                <button type="submit" className="btn btn-primary">Login</button>
                <Link to='/createuser' className="m-3 btn btn-success">Sign-Up</Link>
            </form>
          </div>
        <Footer/>
    </div>
  )
}
