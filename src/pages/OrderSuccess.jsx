import React,{useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
export default function OrderSuccess(){
    const[order,setOrder]=useState(null);
    const navigate=useNavigate();
    // const order=JSON.parse(localStorage.getItem("lastOrder"));

     useEffect(()=>{
        const lastOrder=JSON.parse(localStorage.getItem("lastOrder"));
        if(lastOrder){
            setOrder(lastOrder);
        }else{
            navigate("/");
        }
     },[navigate]);

     if (!order)return null;




    return(
        <div className="max-w-2xl mx-auto p-6 text-center">
            <h1 className="text-3xl font-bold text-green-600">Order Placed Successfully</h1>

            <div className="mt-6 p-5 border rounded-lg shadow text-left">
                <h2 className="text-xl font-semibold mb-2">Order Details</h2>
                <p className="text-gray-600 mb-3 ">Placed on:{order.date}</p>

                {order.items.map((item,index)=>(
                    <div key={index} className="flex justify-between mb-2">
                        <div>
                            <p className="font-semibold">{item.name}</p>
                            <p className="text-gray-500 text-sm">{item.description}</p>
                            <p className="text-gray-500 text-sm">{item.size}</p>
                            <p className="text-gray-500 text-sm">Qty:{item.quantity}</p>
                            </div>
                            <span>₹{item.price*item.quantity}</span>
                            </div>
                ))}
                <hr className="my-3"/>
                <h3 className="text-lg font-semibold">Total: ₹{order.total}</h3>
                <p className="mt-4-text-gray-700">Delivery to:<br />
                {order.address}
                </p>
                <p className="text-gray-500 text-sm mt-1">Payment method:{order.payment}</p>
                </div>
            {/* {order && (
                <div className="mt-6 p-5 border rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-2 ">Order Details</h2>
                    <p className="text-gray-600 mb-3">Placed on:{order.date}</p>
                    <h3 className="text-lg font-semibold">Total: ₹{order.total}</h3>
                    <p className="mt-4 text-gray-700">Delivery to:<br />
                    {order.address}
                    </p>
                    </div> */}
            {/* )} */}
           <button
           onClick={()=>navigate("/")}
           
            className="mt-6 inline-block bg-blue-600 text-white px-6 py-6 py-3 rounded-lg hover:bg-blue-700">Go Home
            </button>
          
               

            
        </div>
    );
}