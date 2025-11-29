

import React, { useEffect, useState } from "react";
import { ShoppingBag, Sparkles, Heart, TrendingUp, ArrowRight } from "lucide-react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [scrolled, setScrolled] = useState(false);
  const [offsetY, setOffsetY] = useState(0);


  useEffect(() => {
    // Simulated products data
    const sampleProducts = [
      { id: 1, categoryId: 1, name: "Drop Collection" },
      { id: 2, categoryId: 2, name: "Coats" },
      { id: 3, categoryId: 3, name: "Tops" }
    ];
    setProducts(sampleProducts);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setOffsetY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShopNow = () => {
    window.location.href = "/products";
  };

  const categories = [
    { 
      id: 1, 
      name: "Drop", 
      image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=500&h=600&fit=crop",
      description: "Latest Collection"
    },
    { 
      id: 2, 
      name: "Coats", 
      image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500&h=600&fit=crop",
      description: "Elegant Outerwear"
    },
    { 
      id: 3, 
      name: "Tops", 
      image: "https://images.unsplash.com/photo-1564859228273-274232fdb516?w=500&h=600&fit=crop",
      description: "Trendy Styles"
    },
    { 
      id: 4, 
      name: "Sweatshirts", 
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=600&fit=crop",
      description: "Comfort Wear"
    },
    { 
      id: 5, 
      name: "Jeans", 
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=600&fit=crop",
      description: "Denim Essentials"
    },
    { 
      id: 6, 
      name: "Co-ord Sets", 
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=600&fit=crop",
      description: "Perfect Match"
    },
  ];

  const features = [
    { icon: <Sparkles className="w-6 h-6" />, title: "Premium Quality", desc: "Handpicked fabrics" },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Latest Trends", desc: "Fashion forward designs" },
    { icon: <Heart className="w-6 h-6" />, title: "Made with Love", desc: "Crafted with passion" },
    { icon: <ShoppingBag className="w-6 h-6" />, title: "Easy Shopping", desc: "Seamless experience" }
  ];

  // parallax translation factors (adjust for desired effect)
  const speedPrimary = 0.25; // main image speed
  const speedSecondary = 0.12; // secondary image speed

  return (
    <div className="relative min-h-screen bg-white">

      {/* HERO SECTION with Parallax */}
      <div className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100"></div>

        {/* Primary Hero Image (moves faster) */}
        <img
          src="https://images.pexels.com/photos/7202771/pexels-photo-7202771.jpeg"
          alt="fashion store"
          className="absolute w-full h-full object-cover opacity-80 mix-blend-multiply will-change-transform"
          style={{ transform: `translateY(${offsetY * speedPrimary}px)` }}
        />

        {/* Secondary Hero Image (moves slower for depth) */}
        <img
          src="https://media.istockphoto.com/id/1287916086/photo/happy-model-holding-hands-on-thighs-in-a-fashion-pose.jpg?s=2048x2048&w=is&k=20&c=ExO9LmOp4hR_yUnqDfkNPAmSvbD35j3FzFHxWGdLkYY="
          alt="fashion store alternate"
          className="absolute w-full h-full object-cover opacity-70 mix-blend-multiply will-change-transform"
          style={{ transform: `translateY(${offsetY * speedSecondary}px)` }}
        />

        {/* Dark overlay to keep text readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none"></div>

        {/* Hero Content (centered) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-4">
          <div className="text-center space-y-6">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 mb-4">
              <span className="text-sm font-medium">✨ New Season Collection</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold drop-shadow-2xl">
              I-SHAAA Fashion
            </h1>
            
            <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed">
              Explore our collections and find a dress that's perfectly you.
            </p>

            <div className="flex gap-4 justify-center mt-8">
              <button
                onClick={handleShopNow}
                className="group px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl flex items-center gap-2"
              >
                Shop Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all"
              >
                Our Story
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Features Bar */}
      <div className="bg-gradient-to-r from-pink-200 to-gray-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3 justify-center">
                <div className="p-2 bg-white/20 rounded-lg">{feature.icon}</div>
                <div>
                  <p className="font-semibold text-sm">{feature.title}</p>
                  <p className="text-xs opacity-90">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Shop by Category
            </h2>
            <p className="text-gray-600 text-lg">Discover your perfect style</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => {
              const catProduct = products.find((p) => p.categoryId === cat.id);
              const productId = catProduct ? catProduct.id : cat.id;
              
              return (
                <div
                  key={cat.id}
                  onClick={() => window.location.href = `/product/${productId}`}
                  className="group relative overflow-hidden rounded-3xl cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold mb-1">{cat.name}</h3>
                    <p className="text-sm opacity-90">{cat.description}</p>
                    <div className="mt-3 flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      Explore Now <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Fashion Story
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover the art behind every outfit. Watch how passion, creativity, and craftsmanship come together at I-SHAAA Fashion.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl ">
            <video 
              className="w-full h-[700] object-cover" 
              controls 
              autoPlay 
              muted 
              loop
              poster="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&h=600&fit=crop"
            >
              <source
                src="https://cdn.shopify.com/videos/c/o/v/6e020f7367214de09970afe968a3d1d0.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            About Us
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            At I-SHAAA Fashion, we believe in creating style — one look at a time.
            Every outfit is designed with passion, precision, and a touch of glamour.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
              <div className="text-4xl mb-3">👗</div>
              <h3 className="font-bold text-xl mb-2">Quality First</h3>
              <p className="text-gray-600 text-sm">Premium fabrics and materials</p>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
              <div className="text-4xl mb-3">✨</div>
              <h3 className="font-bold text-xl mb-2">Trendy Designs</h3>
              <p className="text-gray-600 text-sm">Fashion-forward collections</p>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
              <div className="text-4xl mb-3">💝</div>
              <h3 className="font-bold text-xl mb-2">Made with Love</h3>
              <p className="text-gray-600 text-sm">Crafted with dedication</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-200 to-gray-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Stay in Style</h2>
          <p className="text-lg mb-8 opacity-90">Subscribe to get exclusive offers and latest collections</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/50"
            />
            <button className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">I-SHAAA</h3>
            <p className="text-gray-400 text-sm">Fashion that speaks your style</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Collections</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sale</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                <span className="text-sm">IG</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                <span className="text-sm">FB</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                <span className="text-sm">TW</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© 2024 I-SHAAA Fashion. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}

// import React, { useEffect, useState } from "react";
// import { ShoppingBag, Sparkles, Heart, TrendingUp, ArrowRight, Package, Shield, Truck } from "lucide-react";

// export default function Home() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const sampleProducts = [
//       { id: 1, categoryId: 1, name: "Drop Collection" },
//       { id: 2, categoryId: 2, name: "Coats" },
//       { id: 3, categoryId: 3, name: "Tops" }
//     ];
//     setProducts(sampleProducts);
//   }, []);

//   const handleShopNow = () => {
//     window.location.href = "/products";
//   };

//   const categories = [
//     { 
//       id: 1, 
//       name: "Drop", 
//       image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=500&h=600&fit=crop",
//       description: "Latest Collection"
//     },
//     { 
//       id: 2, 
//       name: "Coats", 
//       image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500&h=600&fit=crop",
//       description: "Elegant Outerwear"
//     },
//     { 
//       id: 3, 
//       name: "Tops", 
//       image: "https://images.unsplash.com/photo-1564859228273-274232fdb516?w=500&h=600&fit=crop",
//       description: "Trendy Styles"
//     },
//     { 
//       id: 4, 
//       name: "Sweatshirts", 
//       image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=600&fit=crop",
//       description: "Comfort Wear"
//     },
//     { 
//       id: 5, 
//       name: "Jeans", 
//       image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=600&fit=crop",
//       description: "Denim Essentials"
//     },
//     { 
//       id: 6, 
//       name: "Co-ord Sets", 
//       image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=600&fit=crop",
//       description: "Perfect Match"
//     },
//   ];

//   const features = [
//     { icon: <Truck className="w-6 h-6" />, title: "Free Shipping", desc: "On orders above ₹999" },
//     { icon: <Shield className="w-6 h-6" />, title: "Secure Payment", desc: "100% protected" },
//     { icon: <Package className="w-6 h-6" />, title: "Easy Returns", desc: "30-day return policy" },
//     { icon: <Heart className="w-6 h-6" />, title: "Quality Assured", desc: "Premium materials" }
//   ];

//   return (
//     <div className="relative min-h-screen bg-white">

//       {/* HERO SECTION */}
//       <div className="relative w-full h-screen overflow-hidden bg-neutral-50">
//         <img
//           src="https://images.pexels.com/photos/7202771/pexels-photo-7202771.jpeg"
//           alt="fashion store"
//           className="absolute w-full h-full object-cover"
//         />
        
//         <div className="absolute inset-0 bg-black/50"></div>

//         <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-4">
//           <div className="text-center max-w-4xl">
//             <p className="text-sm uppercase tracking-wider mb-4 text-neutral-200">
//               New Season Collection 2024
//             </p>
            
//             <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
//               I-SHAAA Fashion
//             </h1>
            
//             <p className="text-lg md:text-xl mb-10 text-neutral-200 max-w-2xl mx-auto">
//               Discover timeless elegance with our curated collection of premium fashion
//             </p>

//             <div className="flex gap-4 justify-center">
//               <button
//                 onClick={handleShopNow}
//                 className="px-8 py-4 bg-white text-black font-medium hover:bg-neutral-100 transition-colors"
//               >
//                 Shop Collection
//               </button>
              
//               <button
//                 onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
//                 className="px-8 py-4 border-2 border-white text-white font-medium hover:bg-white hover:text-black transition-colors"
//               >
//                 Learn More
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Features Bar */}
//       <div className="border-b border-neutral-200 bg-white py-8">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {features.map((feature, idx) => (
//               <div key={idx} className="text-center">
//                 <div className="flex justify-center mb-3 text-neutral-700">{feature.icon}</div>
//                 <p className="font-semibold text-sm text-neutral-900 mb-1">{feature.title}</p>
//                 <p className="text-xs text-neutral-600">{feature.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Categories Section */}
//       <section className="py-20 px-4 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900">
//               Shop by Category
//             </h2>
//             <p className="text-neutral-600 text-lg">Discover your perfect style</p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {categories.map((cat) => {
//               const catProduct = products.find((p) => p.categoryId === cat.id);
//               const productId = catProduct ? catProduct.id : cat.id;
              
//               return (
//                 <div
//                   key={cat.id}
//                   onClick={() => window.location.href = `/product/${productId}`}
//                   className="group relative overflow-hidden cursor-pointer bg-neutral-100"
//                 >
//                   <div className="aspect-[3/4] overflow-hidden">
//                     <img
//                       src={cat.image}
//                       alt={cat.name}
//                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                     />
//                   </div>
                  
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
//                   <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
//                     <h3 className="text-2xl font-semibold mb-1">{cat.name}</h3>
//                     <p className="text-sm opacity-90 mb-2">{cat.description}</p>
//                     <div className="flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
//                       Explore Collection <ArrowRight className="w-4 h-4" />
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Story Section */}
//       <section id="story" className="py-20 px-4 bg-neutral-50">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900">
//               Our Story
//             </h2>
//             <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
//               Discover the craftsmanship and passion behind every piece we create
//             </p>
//           </div>

//           <div className="relative overflow-hidden bg-black border border-neutral-200">
//             <video 
//               className="w-full h-auto" 
//               controls 
//               muted 
//               loop
//               poster="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&h=600&fit=crop"
//             >
//               <source
//                 src="https://cdn.shopify.com/videos/c/o/v/6e020f7367214de09970afe968a3d1d0.mp4"
//                 type="video/mp4"
//               />
//             </video>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="py-20 px-4 bg-white">
//         <div className="max-w-5xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900">
//               Why Choose Us
//             </h2>
//             <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
//               At I-SHAAA Fashion, we're committed to delivering exceptional quality and style
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="text-center p-8 border border-neutral-200 bg-neutral-50">
//               <div className="text-5xl mb-4">👗</div>
//               <h3 className="font-bold text-xl mb-3 text-neutral-900">Premium Quality</h3>
//               <p className="text-neutral-600">Carefully selected fabrics and materials for lasting comfort and style</p>
//             </div>
            
//             <div className="text-center p-8 border border-neutral-200 bg-neutral-50">
//               <div className="text-5xl mb-4">✨</div>
//               <h3 className="font-bold text-xl mb-3 text-neutral-900">Modern Designs</h3>
//               <p className="text-neutral-600">Contemporary fashion that blends elegance with everyday wearability</p>
//             </div>
            
//             <div className="text-center p-8 border border-neutral-200 bg-neutral-50">
//               <div className="text-5xl mb-4">💝</div>
//               <h3 className="font-bold text-xl mb-3 text-neutral-900">Crafted with Care</h3>
//               <p className="text-neutral-600">Every piece is designed with attention to detail and passion</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Featured Collection Banner */}
//       <section className="py-20 px-4 bg-neutral-900 text-white">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Winter Collection 2024</h2>
//           <p className="text-lg mb-8 text-neutral-300">
//             Embrace the season with our latest arrivals. Limited stock available.
//           </p>
//           <button
//             onClick={handleShopNow}
//             className="px-10 py-4 bg-white text-black font-semibold hover:bg-neutral-100 transition-colors inline-flex items-center gap-2"
//           >
//             Shop Winter Collection
//             <ArrowRight className="w-5 h-5" />
//           </button>
//         </div>
//       </section>

//       {/* Newsletter Section */}
//       <section className="py-20 px-4 bg-neutral-50 border-t border-neutral-200">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-3 text-neutral-900">Stay Updated</h2>
//           <p className="mb-8 text-neutral-600">Subscribe to receive exclusive offers and new arrivals</p>
          
//           <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
//             <input
//               type="email"
//               placeholder="Enter your email address"
//               className="flex-1 px-6 py-4 bg-white border border-neutral-300 text-neutral-900 focus:outline-none focus:border-neutral-900"
//             />
//             <button className="px-8 py-4 bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-colors">
//               Subscribe
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-neutral-900 text-white py-16 px-4 border-t border-neutral-800">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid md:grid-cols-4 gap-10 mb-12">
//             <div>
//               <h3 className="text-2xl font-bold mb-4">I-SHAAA</h3>
//               <p className="text-neutral-400 text-sm">
//                 Redefining fashion with timeless elegance and contemporary style
//               </p>
//             </div>
            
//             <div>
//               <h4 className="font-semibold mb-4 text-white">Shop</h4>
//               <ul className="space-y-2 text-neutral-400 text-sm">
//                 <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Collections</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Sale</a></li>
//               </ul>
//             </div>
            
//             <div>
//               <h4 className="font-semibold mb-4 text-white">Customer Care</h4>
//               <ul className="space-y-2 text-neutral-400 text-sm">
//                 <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Returns & Exchange</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
//               </ul>
//             </div>
            
//             <div>
//               <h4 className="font-semibold mb-4 text-white">Follow Us</h4>
//               <div className="space-y-2">
//                 <a href="#" className="block text-neutral-400 hover:text-white transition-colors text-sm">Instagram</a>
//                 <a href="#" className="block text-neutral-400 hover:text-white transition-colors text-sm">Facebook</a>
//                 <a href="#" className="block text-neutral-400 hover:text-white transition-colors text-sm">Pinterest</a>
//                 <a href="#" className="block text-neutral-400 hover:text-white transition-colors text-sm">Twitter</a>
//               </div>
//             </div>
//           </div>
          
//           <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
//             <p className="text-neutral-400 text-sm">© 2024 I-SHAAA Fashion. All rights reserved.</p>
//             <div className="flex gap-6 text-neutral-400 text-sm">
//               <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
//               <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
//             </div>
//           </div>
//         </div>
//       </footer>

//     </div>
//   );
// }
