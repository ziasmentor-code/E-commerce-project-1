// import React,{useContext} from "react";
// import { WishlistContext } from "../Context/WishlistContext";

// export default function Wishlist(){
//     const {wishlist,removeFromWishlist}=useContext(WishlistContext);


//     return(
//         <div className="p-6">
//             <h1 className="text-3xl font-bold mb-4">My Wishlist</h1>

//             {wishlist.length === 0 && <p>No item in wishlist</p>}


//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//                 {wishlist.map((item)=>(
//                     <div key={item.id} className="shadow p-4 rounded">
//                         <img src={item.image} className="w-full h-64 object-cover" />

//                         <h2 className="mt-2 font-bold">{item.name}</h2>
//                         <p>₹{item.price}</p>

//                         <button
//                         onClick={()=>removeFromWishlist(item.id)}
//                         className="bg-red-500 text-white px-4 py-2 mt-2 rounded">
//                             Remove
//                         </button>
//                         </div>
//                 ))}
//             </div>
//         </div>
//             );
// }

import React, { useContext } from "react";
import { WishlistContext } from "../Context/WishlistContext";
import { useNavigate } from "react-router-dom";

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  const navigate = useNavigate();

  if (!wishlist.length) return <p className="text-center mt-10">Your wishlist is empty!</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>
      {wishlist.map(item => (
        <div key={item.id} className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => navigate(`/product/${item.id}`)}>
            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
            <p>{item.name}</p>
          </div>
          <button
            onClick={() => removeFromWishlist(item.id)}
            className="text-red-500"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
