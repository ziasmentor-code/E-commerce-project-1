


import React, { useEffect, useState } from "react";
import { ShoppingBag, Sparkles, Heart, ArrowRight, Star, TrendingUp, Truck, Shield, Play } from "lucide-react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [scrolled, setScrolled] = useState(false);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
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
      image: "https://cdn.shopify.com/s/files/1/0266/6276/4597/files/301040917BLACK_1_800x.jpg?v=1763138424",
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
      name: "Baggy Jeans", 
      image: "https://pictures.kartmax.in/live/sites/aPfvUDpPwMn1ZadNKhP7/theme/Widgets-Home-PageBaggy-Jeans-d9153d6d-a0f4-439c-9935-01845a90b6c2.jpg",
      description: "Baggy Jeans Essentials"
    },
    { 
      id: 6, 
      name: "Co-ord Sets", 
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=600&fit=crop",
      description: "Perfect Match"
    },
  ];

  const features = [
    { icon: <Sparkles className="w-6 h-6 " />, title: "Premium Quality", desc: "Handpicked fabrics" },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Latest Trends", desc: "Fashion forward designs" },
    { icon: <Heart className="w-6 h-6" />, title: "Made with Love", desc: "Crafted with passion" },
    { icon: <ShoppingBag className="w-6 h-6" />, title: "Easy Shopping", desc: "Seamless experience" }
  ];

  const speedPrimary = 0.25;
  const speedSecondary = 0.12;

  return (
    <div className="relative min-h-screen bg-white">

      {/* HERO SECTION with Parallax */}
      <div className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100"></div>

        <img
          src="https://images.pexels.com/photos/7202771/pexels-photo-7202771.jpeg"
          alt="fashion store"
          className="absolute w-full h-full object-cover opacity-80 mix-blend-multiply will-change-transform"
          style={{ transform: `translateY(${offsetY * speedPrimary}px)` }}
        />

        <img
          src="https://www.westside.com/cdn/shop/files/Kids-Web_b62c3641-5114-4112-9d13-36432c22264d.jpg?v=1763708515"
          className="absolute w-full h-full object-cover opacity-70 mix-blend-multiply will-change-transform"
          style={{ transform: `translateY(${offsetY * speedSecondary}px)` }}
        />
        
        <img
          src="https://www.westside.com/cdn/shop/files/WSC-WEB-NEW_1.jpg?v=1763358714"
          className="absolute w-full h-full object-cover opacity-70 mix-blend-multiply will-change-transform"
          style={{ transform: `translateY(${offsetY * speedSecondary}px)` }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-4">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 mb-4 animate-pulse">
              <span className="text-sm font-medium flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                New Season Collection
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold drop-shadow-2xl tracking-tight">
              I-SHAAA Fashion
            </h1>
            
            <p className="text-xl md:text-3xl max-w-3xl mx-auto font-light leading-relaxed drop-shadow-lg">
              Explore our collections and find a dress that's perfectly you.
            </p>

            <div className="flex gap-4 justify-center mt-8">
              <button
                onClick={handleShopNow}
                className="group px-10 py-5 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-all transform hover:scale-110 shadow-2xl flex items-center gap-3 text-lg"
              >
                Shop Now
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
              
              <button
                onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-5 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-gray-900 transition-all transform hover:scale-110 shadow-2xl text-lg"
              >
                Our Story
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Features Bar */}
      <div className="bg-gradient-to-r from-purple-400 via-black-400 to-black-600 text-black py-8 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-4 justify-center group cursor-pointer">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <div>
                  <p className="font-bold text-base">{feature.title}</p>
                  <p className="text-sm opacity-90">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-white via-purple-50/30 to-pink-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="px-4 py-2  text-black text-sm font-semibold rounded-full">
                Collections
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6  text-black  ">
              Shop by Category
            </h2>
            <p className="text-gray-600 text-xl">Discover your perfect style</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => {
              const catProduct = products.find((p) => p.categoryId === cat.id);
              const productId = catProduct ? catProduct.id : cat.id;
              
              return (
                <div
                  key={cat.id}
                  onClick={() => window.location.href = `/product/${productId}`}
                  className="group relative overflow-hidden rounded-3xl cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className="aspect-[3/4] overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-3xl font-bold mb-2">{cat.name}</h3>
                    <p className="text-base opacity-90 mb-4">{cat.description}</p>
                    <div className="flex items-center gap-2 text-base font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      <span>Explore Now</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Full-Width Video Story Section */}
      <section id="story" className="relative w-full overflow-hidden bg-black">
        {/* Video Container - Full Width */}
        <div className="relative w-full h-screen">
          <video 
            className="absolute inset-0 w-full h-full object-cover" 
            autoPlay 
            muted 
            loop
            playsInline
            poster="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&h=600&fit=crop"
          >
            <source
              src="https://cdn.shopify.com/videos/c/o/v/6e020f7367214de09970afe968a3d1d0.mp4"
              type="video/mp4"
            />
          </video>
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60"></div>
          
          {/* Content overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-4xl">
              <div className="mb-6 inline-block">
                <span className="px-6 py-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-sm font-semibold">
                  <Play className="inline w-4 h-4 mr-2" />
                  Watch Our Story
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
                Our Fashion Story
              </h2>
              <p className="text-xl md:text-2xl font-light leading-relaxed drop-shadow-lg opacity-90">
                Discover the art behind every outfit. Watch how passion, creativity, and craftsmanship come together at I-SHAAA Fashion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-purple text-black-500 text-sm font-semibold rounded-full">
              About Us
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-black-500 text-black ">
            Crafting Fashion Excellence
          </h2>
          <p className="text-gray-700 text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
            At I-SHAAA Fashion, we believe in creating style — one look at a time.
            Every outfit is designed with passion, precision, and a touch of glamour.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="mb-4 flex justify-center">
                <div className="p-4 bg-white rounded-2xl w-16 h-16">
                  <Shield className="text-purple-600" size={30}/>
                </div>
              </div>
              <h3 className="font-bold text-2xl mb-3">Quality First</h3>
              <p className="text-gray-600">Premium fabrics and materials carefully selected for you</p>
            </div>
            
            <div className="p-8 bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="mb-4 flex justify-center">
                <div className="p-4 bg-white rounded-2xl w-16 h-16">
                  <TrendingUp className="text-pink-600" size={30}/>
                </div>
              </div>
              <h3 className="font-bold text-2xl mb-3">Trendy Designs</h3>
              <p className="text-gray-600">Fashion-forward collections that set trends</p>
            </div>
            
            <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="mb-4 flex justify-center">
                <div className="p-4 bg-white rounded-2xl w-16 h-16">
                  <Heart className="text-blue-600" size={30}/>
                </div>
              </div>
              <h3 className="font-bold text-2xl mb-3">Made with Love</h3>
              <p className="text-gray-600">Crafted with dedication and attention to detail</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Banner Image */}
      <section className="w-full overflow-hidden">
        <img 
          src="https://www.westside.com/cdn/shop/files/Web-NewBorn_1.jpg?v=1762510695"
          alt="Featured collection"
          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
        />
      </section>

      {/* Newsletter Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-purple-300 via-black-300 to-black-300 text-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-50 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <div className="mb-6">
            <Sparkles className="w-12 h-12 mx-auto mb-4" />
          </div>
          <h2 className="text-5xl font-bold mb-6">Stay in Style</h2>
          <p className="text-xl mb-10 opacity-90">Subscribe to get exclusive offers and latest collections delivered to your inbox</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-8 py-5 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/50 text-lg"
            />
            <button className="px-10 py-5 bg-white text-purple-600 font-bold rounded-full hover:bg-gray-100 transition-all transform hover:scale-110 shadow-2xl text-lg">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}