
import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";


import DropImg from "../assets/drop.png";
import CoatsImg from "../assets/coats.png";
import TopImg from "../assets/top.png";
import CoordImg from "../assets/coord.png";
import JeansImg from "../assets/jeans.png";
import SwtImg from "../assets/swt.png";
// import ChunkyImg from "../assets/chunky.png";
// import AleeImg from "../assets/alee.png";





export default function Home() {
  const navigate = useNavigate();

  const handleShopNow = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) navigate("/product");
    else navigate("/login");
  };

  const categories = [
    { name: "Drop", image: DropImg },
    { name: "Coats", image: CoatsImg },
    { name: "Top", image: TopImg },
    { name: "Swt", image: SwtImg },
    { name: "Jeans", image: JeansImg },
    { name: "Coord", image: CoordImg },
    // { name: "Chunky", image: ChunkyImg },
    // { name: "Alee", image: AleeImg },
    
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    
      <div className="relative w-full h-[90vh]">
        <img
          src="https://images.pexels.com/photos/7202771/pexels-photo-7202771.jpeg"
          alt="fashion store"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/50">
          <h2 className="text-3xl md:text-5xl max-w-4xl drop-shadow-lg text-center px-6 py-3 mb-6">
            Explore our collections and find a dress that's perfectly you.
          </h2>
          <button
            onClick={handleShopNow}
            className="mt-10 border border-black text-black font-medium px-6 py-2 rounded-2xl hover:bg-black hover:text-white transition"
          >
            Shop Now
          </button>
        </div>
      </div>

    
      <section className="py-12 px-8 max-w-6xl w-full">
        <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <img
              key={cat.name}
              src={cat.image}
              alt={cat.name}
              className="rounded-2xl object-cover w-full h-full hover:scale-105 transition-transform duration-500"
            />
          ))}
        </div>
      </section>
      {/* <section className="py-12 px-8 max-w-6xl w-full">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Categories</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="w-full h-64 overflow-hidden rounded-2xl">
            <img 
             src={ChunkyImg}
             alt="Chunky"
             className="w-full h-full object-cover"
             />
          </div>
          <div className="w-full h-64 overflow-hidden rounded-2xl">
            <img
             src={AleeImg}
             alt="Alee"
             className="w-full h-full object-cover"
             />
          </div>
        </div>
      </section> */}


      
       <section className="py-12 px-8 flex flex-col items-center text-center bg-gray-50">
        <h2 className="text-3xl font-bold mb-6 font-cormorant">Our Fashion Story</h2>
        <p className="text-gray-600 mb-8 max-w-2xl">
          Discover the art behind every outfit. Watch how passion, creativity, and craftsmanship come together at I-SHAAA Fashion.
       </p>
      <div className="w-full  rounded-2xl overflow-hidden shadow-lg">           
        <video
            className="w-full h-full object-cover rounded-2xl object-cover" 
            controls
            autoPlay
            muted
            loop
          >
            <source
              src="https://cdn.shopify.com/videos/c/o/v/6e020f7367214de09970afe968a3d1d0.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

 
      <section className="py-12 px-6 text-center max-w-4xl">
        <h2 className="text-3xl font-bold mb-4">About us</h2>
        <p className="text-gray-700 font-lora">
          At I-SHAAA Fashion, we believe in creating style — one look at a time.
          Every outfit is designed with passion, precision, and a touch of glamour.
        </p>
      </section>

      
    </div>
  );
}
