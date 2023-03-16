import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link,useNavigate} from 'react-router-dom'

export default function SignUp(){
    const navigate=useNavigate();
    const [credentials, setCredentials] = useState({name:"",email:"",password:"",location:""})
    const handleSubmit=async (e)=>{
        e.preventDefault()
        const response=await fetch("https://go-food-one.vercel.app/api/createuser",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.location})
        })
        const json =await response.json();
        console.log(json);
        if(!json.success){
            alert('Please Enter valid Credentials');
        }
        else{
            alert("User created");
            navigate('/login')
        }
    }
    const onChange=(event)=>{
        setCredentials({...credentials,[event.target.name]:event.target.value})
    }
    return (
        <>
            <Navbar/>
            <div className="container">

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name='email' value={credentials.value} onChange={onChange} aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name='password' onChange={onChange} value={credentials.password}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" name='location' onChange={onChange} value={credentials.location}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to='/login' className="m-3 btn btn-success">Login</Link>
            </form>
            </div>
            <Footer/>
        </>
    )
}
