import React,{useEffect,useRef, useState} from 'react'
import { useDispatchCart,useCart } from './ContextReducer';
export default function Card({item}) {
    let dispatch=useDispatchCart();
    let priceOptions=Object.keys(item.options[0])
    // console.log(priceOptions);
    const data=useCart();
    const [qty, setQty] = useState(1)
    const [size, setSize] = useState("")
    const priceRef=useRef();    
    const handleAddToCart=async ()=>{
        let food=[];
        for(const i of data){
            if(i.id===item._id){
                food=i;
                break;
            }
        }
        if(food!==[]){
            if(food.size===size){
                await dispatch({type:"UPDATE",id:item._id,price:finalPrice,qty:qty})
                return
            }
        }
        await dispatch({type:"ADD",id:item._id,name:item.name,qty:qty,size:size,price:finalPrice})
    }
    // console.log(qty,size);
    // console.log(item.options[0][size]);
    let finalPrice=qty * parseInt(item.options[0][size]);
    useEffect(()=>{
        setSize(priceRef.current.value);
    },[])
  return (
    <div><div className=''>
    <div className="card mt-3" style={{width: "18rem",maxHeight:"360px"}} >
        <img src={item.img} className="card-img-top object-fit-contain" alt="..." style={{height:"160px",objectFit:"fill"}}/>
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                {/* <p className="card-text">{item.description}</p> */}
                {/* <Link to="/" className="btn btn-primary">Go somewhere</Link> */}
                <div className="w-100">
                    <select name="" id="" className='m-2 h-100  bg-success rounded' onChange={(e)=>{setQty(e.target.value)}}>
                        {Array.from(Array(6),(e,i)=>{
                            return(
                            <option key={i+1} value={i+1}>{i+1}</option>
                            )
                        })}
                    </select>
                    <select name="" id="" ref={priceRef} className='m-2 h-100  bg-success rounded' onChange={(e)=>{setSize(e.target.value)}}>
                        {
                            priceOptions.map((data)=>{
                                return(
                                    <option key={data} value={data}>{data.toUpperCase()}</option>
                                )
                            })
                        }
                        
                    </select>
                    <div className='d-inline h-100 fs-4'>
                        Price:-{finalPrice}
                    </div>
                </div>
                <hr />
                {localStorage.getItem("authToken")?
                <button className='btn btn-success' onClick={handleAddToCart}>Add to Cart</button>
            :<>Login to order</>    
            }
            </div>
    </div>
</div></div>
  )
}
