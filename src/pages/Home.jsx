// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Footer from "../components/Footer";

// import DropImg from "../assets/drop.png";
// import CoatsImg from "../assets/coats.png";
// import TopImg from "../assets/top.png";
// import CoordImg from "../assets/coord.png";
// import JeansImg from "../assets/jeans.png";
// import SwtImg from "../assets/swt.png";

// export default function Home() {
//   const navigate = useNavigate();

//  const handleShopNow = () => {
//   const user = JSON.parse(localStorage.getItem("user"));
//   if (user) navigate("/product"); 
//   else navigate("/products");
// };

//   const categories = [
//     { id: 1, name: "Drop", image: DropImg },
//     { id: 2, name: "Coats", image: CoatsImg },
//     { id: 3, name: "Top", image: TopImg },
//     { id: 4, name: "Swt", image: SwtImg },
//     { id: 5, name: "Jeans", image: JeansImg },
//     { id: 6, name: "Coord", image: CoordImg },
//   ];

//   return (
//     <div className="relative min-h-screen bg-gray-100">

//       {/* HERO SECTION */}
//       <div className="relative w-full h-[90vh]">
//         <img
//           src="https://images.pexels.com/photos/7202771/pexels-photo-7202771.jpeg"
//           alt="fashion store"
//           className="absolute w-full h-full object-cover"
//         />

//         <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/50 z-10">
//           <h2 className="text-3xl md:text-5xl max-w-4xl drop-shadow-lg text-center px-6 py-3 mb-6">
//             Explore our collections and find a dress that's perfectly you.
//           </h2>

//           <button
//             onClick={handleShopNow}
//             className="mt-10 border border-white text-white font-medium px-6 py-2 rounded-2xl hover:bg-white hover:text-black transition"
//           >
//             Shop Now
//           </button>
//         </div>
//       </div>

//       {/* Categories */}
//       <section className="py-12 px-8 max-w-6xl w-full mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {categories.map((cat) => (
//             <img
//               key={cat.id}
//               src={cat.image}
//               alt={cat.name}
//               onClick={() => navigate(`/product/${cat.id}`)}
//               className="rounded-2xl object-cover w-full h-full hover:scale-105 transition-transform duration-500 cursor-pointer"
//             />
//           ))}
//         </div>
//       </section>

//       {/* Story */}
//       <section className="py-12 px-8 flex flex-col items-center text-center bg-gray-50">
//         <h2 className="text-3xl font-bold mb-6 font-cormorant">
//           Our Fashion Story
//         </h2>

//         <p className="text-gray-600 mb-8 max-w-2xl">
//           Discover the art behind every outfit. Watch how passion, creativity, and craftsmanship come together at I-SHAAA Fashion.
//         </p>

//         <div className="w-full rounded-2xl overflow-hidden shadow-lg">
//           <video
//             className="w-full h-full object-cover rounded-2xl"
//             controls
//             autoPlay
//             muted
//             loop
//           >
//             <source
//               src="https://cdn.shopify.com/videos/c/o/v/6e020f7367214de09970afe968a3d1d0.mp4"
//               type="video/mp4"
//             />
//           </video>
//         </div>
//       </section>

//       {/* About */}
//       <section className="py-12 px-6 text-center max-w-4xl mx-auto">
//         <h2 className="text-3xl font-bold mb-4">About Us</h2>
//         <p className="text-gray-700 font-lora">
//           At I-SHAAA Fashion, we believe in creating style — one look at a time.
//           Every outfit is designed with passion, precision, and a touch of glamour.
//         </p>
//       </section>

//       <Footer />
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

import DropImg from "../assets/drop.png";
import CoatsImg from "../assets/coats.png";
import TopImg from "../assets/top.png";
import CoordImg from "../assets/coord.png";
import JeansImg from "../assets/jeans.png";
import SwtImg from "../assets/swt.png";

export default function Home() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5015/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  const handleShopNow = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!products.length) return; 
    const firstProductId = products[0]?.id;
    if (user) navigate(`/product/${firstProductId}`);
    else navigate("/products"); 
  };

  const categories = [
    { id: 1, name: "Drop", image: DropImg },
    { id: 2, name: "Coats", image: CoatsImg },
    { id: 3, name: "Top", image: TopImg },
    { id: 4, name: "Swt", image: SwtImg },
    { id: 5, name: "Jeans", image: JeansImg },
    { id: 6, name: "Coord", image: CoordImg },
  ];

  return (
    <div className="relative min-h-screen bg-gray-100">

      {/* HERO */}
      <div className="relative w-full h-[90vh]">
        <img
          src="https://images.pexels.com/photos/7202771/pexels-photo-7202771.jpeg"
          alt="fashion store"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/50 z-10">
          <h2 className="text-3xl md:text-5xl max-w-4xl drop-shadow-lg text-center px-6 py-3 mb-6">
            Explore our collections and find a dress that's perfectly you.
          </h2>

          <button
            onClick={handleShopNow}
            className="mt-10 border border-white text-white font-medium px-6 py-2 rounded-2xl hover:bg-white hover:text-black transition"
          >
            Shop Now
          </button>
        </div>
      </div>

      {/* Categories */}
      <section className="py-12 px-8 max-w-6xl w-full mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const catProduct = products.find((p) => p.categoryId === cat.id);
            const productId = catProduct ? catProduct.id : cat.id; 
            return (
              <img
                key={cat.id}
                src={cat.image}
                alt={cat.name}
                onClick={() => navigate(`/product/${productId}`)}
                className="rounded-2xl object-cover w-full h-full hover:scale-105 transition-transform duration-500 cursor-pointer"
              />
            );
          })}
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 px-8 flex flex-col items-center text-center bg-gray-50">
        <h2 className="text-3xl font-bold mb-6 font-cormorant">
          Our Fashion Story
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl">
          Discover the art behind every outfit. Watch how passion, creativity, and craftsmanship come together at I-SHAAA Fashion.
        </p>
        <div className="w-full rounded-2xl overflow-hidden shadow-lg">
          <video className="w-full h-full object-cover rounded-2xl" controls autoPlay muted loop>
            <source
              src="https://cdn.shopify.com/videos/c/o/v/6e020f7367214de09970afe968a3d1d0.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </section>

      {/* About */}
      <section className="py-12 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-gray-700 font-lora">
          At I-SHAAA Fashion, we believe in creating style — one look at a time.
          Every outfit is designed with passion, precision, and a touch of glamour.
        </p>
      </section>

      <Footer />
    </div>
  );
}
