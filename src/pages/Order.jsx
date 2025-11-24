import React,{useContext,useState} from "react";
import { CartContext } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Order(){
    const {cart,clearCart}=useContext(CartContext);
    const navigate=useNavigate();


    const[address,setAddress]=useState("");
    const[payment,setPayment]=useState("COD");
    const total=cart.reduce((sum,item)=>sum+item.price*item.quantity,0);

    const handlePlaceOrder=()=>{
        if(!address.trim()){
            alert("Please enter your address!");
            return;
        }
        const orderDetails={
            item:cart,
            address,
            payment,
            total,
            date:new Date().toLocaleString(),
        };
        localStorage.setItem("lastOrder",JSON.stringify(orderDetails));
        clearCart();
        navigate("/order-success");
    };
    return(
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">Complete your order</h1>

            <div className="border p-4 rounded-lg shadow mb-6 ">
                <h2 className="text-xl font-semibold mb-3">Order Summary</h2>
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ):(
                    cart.map((item,index)=>(
                        <div className="flex justify-between mb-2 " key={index}>
                            <div>
                                <p className="font-semibold">{item.name}</p>
                                <p className="text-gray-500 text-sm">{item.description}</p>
                                <p className="text-gray-500 text-sm">Size:{item.size}</p>
                                <p className="text-gray-500 text-sm">Qty:{item.quantity}</p>
                                </div>
                      
                            <span>₹{item.price* item.quantity}</span>
                            </div>
                    ))
              
                )}
                <hr className="my-3" />
                <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>{total}</span>
                </div>
            </div>

            <div className="border p-4 rounded-lg shadow mb-6">
                <h2 className="text-xl font-semibold mb-3">Delivery Address</h2>
                <textarea 
                className="w-full border rounded p-2"
                rows="3"
                placeholder="Enter Full Address..."
                value={address}
                onChange={(e)=>setAddress(e.target.value)}
                />
            </div>

            <div className="border p-4 rounded-lg shadow mb-6">
                <h2 className="text-xl font-semibold mb-3 ">Payment Method</h2>

                <label className="flex items-center gap-3 mb-2">
                    <input
                    type="radio"
                    name="payment"
                    value="COD"
                    checked={payment === "COD"}
                    onChange={(e)=> setPayment(e.target.value)}
                    />
                    cash on delivery
                </label>

                <label className="flex items-center gap-3">
                    <input 
                    type="radio"
                    name="payment"
                    value="online"
                    checked={payment === "online"}
                    onChange={(e)=> setPayment(e.target.value)}
                    />
                    online Payment (Not active)
                </label>
            </div>
            <button 
            onClick={handlePlaceOrder}
            className="w-full py-3 bg-blue-300 text-white rounded-lg text-lg hover:bg-blue-700">Place Order</button>
        </div>
    );
}





