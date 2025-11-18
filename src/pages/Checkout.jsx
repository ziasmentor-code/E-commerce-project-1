import React,{useContext,useState} from "react";
import { CartContext } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";


export default function Checkout(){
    const {cartItems,totalPrice} = useContext(CartContext);
    const navigate=useNavigate();


    const [form,setForm]=useState({
        name:"",
        address:"",
        phone:"",
    });

    const handleChange=(e)=>{
        setForm({...form,[e.target.name]: e.target.value});
    };

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(!form.name || !form.address || !form.phone){
            alert("Please fill all details");
            return;
        }
        navigate("/success");
    };
    return(
        <div className="p-6 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Checkout</h1>

            <form className="bg-white p-4 shadow rounded mb-6 " onSubmit={handleSubmit}>
                <h2 className="text-xl font-semibold mb-3 ">Shipping Details</h2>

                <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="w-full border p-2 mb-3"
                onChange={handleChange}
                />

                <textarea
                name="address"
                placeholder="Full Address"
                className="w-full border p-2 mb-3"
                onChange={handleChange}
                />

                <input 
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="w-full border p-2 mb-3"
                onChange={handleChange}
                />

                <button className="w-full bg-black text-white py-2 rounded mt-2">
                    Place Order
                </button>
            </form>

            <div className="bg-white p-4 shadow rounded">
                <h2 className="text-xl font-semibold mb-3">Order Summary</h2>

                {cartItems.map((item)=>(
                    <div key={item.id} className="flex justify-between mb-2">
                        <p>{item.name}</p>
                        <p>₹{item.price}</p>
                        </div>
                ))}
                <hr className="my-2"/>
                <p className="font-bold text-lg">Total:₹{totalPrice}</p>
            </div>
        </div>
    );
}