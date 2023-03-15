import React from 'react'
import {Link, useNavigate} from "react-router-dom";
import {Badge} from "react-bootstrap"
import { useCart } from './ContextReducer';
import jwt_decode from "jwt-decode";
export default function Navbar() {
    let state=useCart();
    const navigate=useNavigate()
    if(localStorage.getItem("authToken")){
        const name=jwt_decode(localStorage.getItem("authToken")).user.name;
        var [first, ...rest] = name.split(' ');
    }
  return (
  <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
        <Link className="navbar-brand fs-2 fst-italic" to="/">GoFood</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
            <li className="nav-item">
                <Link className="nav-link text-white" aria-current="page" to="/">Home</Link>
            </li>
            {localStorage.getItem('authToken')?
            <li className="nav-item">
                <Link className="nav-link text-white" aria-current="page" to="/myorder">My Orders</Link>
            </li>:""
            }
            </ul>
            <div className='d-flex'>
                {
                    // <Link className="btn mx-1 btn-danger text-white " to="/login">Logout</Link>
                    // const token=localStorage.getItem('authToken')
                    // const response=async (token)=>{
                    //     const data=await fetch("http://localhost:5000/api/getuserdata",{
                    //         method:'POST',
                    //         headers:{
                    //             'Content-Type':'application/json'
                    //         },
                    //         body:JSON.stringify({email:credentials.email,password:credentials.password})
                    //     })
                    // } 
                    localStorage.getItem('authToken')?
                    
                    <div className='d-flex'>
                    <p className='me-3 my-1 fs-5'>Welcome <span className='text-primary inline'> {first}</span></p>
                    
                    <div className='btn mx-2 text-success bg-white' onClick={()=>{
                        navigate("/cart");
                    }}>
                        My Cart
                        {
                            state.length?(
                                <Badge  bg="success" className='ms-1'>{state.length}</Badge>
                            ):""
                        }
                    </div>
                    
                    <button onClick={()=>{
                         localStorage.removeItem('authToken')
                         localStorage.removeItem('userEmail')
                        navigate('/')
                    }} className='btn btn-danger'>Logout</button>
                    
                    </div>
                    :
                    <>
                        <Link className="btn mx-1 btn-outline-primary text-white " to="/login">Login</Link>
                        <Link className="btn mx-1 btn-outline-primary text-white" to="/createuser">Sign Up</Link>
                    </>
                }
            </div>
        </div>
        </div>
    </nav>
  </div>
  )
}
