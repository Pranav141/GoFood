import React from 'react'
import { useCart,useDispatchCart } from '../components/ContextReducer'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
export default function Cart() {
    let state=useCart();
    let dispatch=useDispatchCart();
    console.log(state.length);
    let totalPrice=0;
    for (let index = 0; index < state.length; index++) {
        totalPrice=totalPrice+ state[index].price;
    }
    const handleCheckout=async ()=>{
        let userEmail = localStorage.getItem("userEmail");
        let response = await fetch("http://localhost:5000/api/orderData", {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        order_data: state,
        email: userEmail,
        order_date: new Date().toDateString()
      })
    });
    if (response.status === 200) {
        dispatch({ type: "DROP" })
      }
    }
    return (
        <>
        <Navbar/>
        <div>
            {state.length?(
                <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md'>
            <table className="table table-hover">
                <thead className='text-success fs-4'>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Option</th>
                        <th scope="col">Amount</th>
                        <th scope="col"></th>

                    </tr>
                </thead>
                <tbody>
                {state.map((food,idx)=>(
                    <tr>
                        <th scope="row">{idx+1}</th>
                        <td>{food.name}</td>
                        <td>{food.qty}</td>
                        <td>{food.size.toUpperCase()}</td>
                        <td>₹{food.price}/-</td>
                        <td>
                            <button className='btn text-danger ' onClick={()=>{dispatch({type:"REMOVE",id:state.id})}}>Remove</button>
                        </td>
                    </tr>
                ))}
                        
                </tbody>
            </table>
            <div><h1 className='fs-3 text-success'>Total Price:- ₹{totalPrice}/-</h1></div>
            <button className='btn bg-success mt-5' onClick={handleCheckout}>Checkout</button>
            </div>
        ):(<div className='text-success w-100 text-center fs-4 my-3'>
            The Cart is Empty.
        </div>
        )}
        </div>
        <Footer/>
        </>
        )
    }
