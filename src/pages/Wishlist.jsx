import React,{useContext} from "react";
import { WishlistContext } from "../Context/WishlistContext";

export default function Wishlist(){
    const {wishlist,removeFromWishlist}=useContext(WishlistContext);


    return(
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">My Wishlist</h1>

            {wishlist.length === 0 && <p>No item in wishlist</p>}


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {wishlist.map((item)=>(
                    <div key={item.id} className="shadow p-4 rounded">
                        <img src={item.image} className="w-full h-64 object-cover" />

                        <h2 className="mt-2 font-bold">{item.name}</h2>
                        <p>₹{item.price}</p>

                        <button
                        onClick={()=>removeFromWishlist(item.id)}
                        className="bg-red-500 text-white px-4 py-2 mt-2 rounded">
                            Remove
                        </button>
                        </div>
                ))}
            </div>
        </div>
            );
}