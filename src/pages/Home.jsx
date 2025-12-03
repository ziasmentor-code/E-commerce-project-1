




import React, { useEffect, useState } from "react";
import { ShoppingBag, Sparkles, Heart, ArrowRight, Star, TrendingUp, Truck, Shield, Play, Award, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const sampleProducts = [
      { id: 1, categoryId: 1, name: "Drop Collection" },
      { id: 2, categoryId: 2, name: "Coats" },
      { id: 3, categoryId: 3, name: "Tops" }
    ];
    setProducts(sampleProducts);

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleShopNow = () => {
    window.location.href = "/products";
  };

  const heroSlides = [
    {
      image: "https://images.pexels.com/photos/7202771/pexels-photo-7202771.jpeg",
      title: "Winter Collection 2025",
      subtitle: "Embrace the Season in Style",
      gradient: "from-black/60 via-black/40 to-transparent"
    },
    {
      image: "https://www.westside.com/cdn/shop/files/Kids-Web_b62c3641-5114-4112-9d13-36432c22264d.jpg?v=1763708515",
      title: "Kids Fashion Paradise",
      subtitle: "Adorable Styles for Little Ones",
      gradient: "from-black/60 via-black/40 to-transparent"
    },
    {
      image: "https://www.westside.com/cdn/shop/files/Woman-Web_fc468136-54bc-43a9-a4d8-6845e5b80adf.jpg?v=1763707730",
      title: "Exclusive Designer Wear",
      subtitle: "Luxury Meets Comfort",
      gradient: "from-black/60 via-black/40 to-transparent"
    }
  ];

  const categories = [
    { id: 1, image: "https://uptownie.com/cdn/shop/files/4_e74ed6d6-12d9-4d8e-86f0-3f68f42e7d0c_540x.png?v=1762348678",  tag: "New" },
    { id: 2, image: "https://uptownie.com/cdn/shop/files/4_31f9a67b-ad94-4a98-a54e-3cf1a8b580e7_540x.png?v=1762325706",  tag: "Hot" },
    { id: 3, image: "https://uptownie.com/cdn/shop/files/3_15a34dad-2004-45bf-bb89-0b5805547bba_540x.png?v=1760447045",  tag: "Sale" },
    { id: 4, image: "https://uptownie.com/cdn/shop/files/5_5ed8a0e5-5e35-4524-a9f7-c8b830be70f5_540x.png?v=1762325707",  tag: "New" },
    { id: 5, image: "https://uptownie.com/cdn/shop/files/4_0fa6a4b6-0484-4c7a-a161-4fe83f04c97c_540x.png?v=1760447046", tag: "Trending" },
    { id: 6, image: "https://uptownie.com/cdn/shop/files/3_7535da31-8e7a-4ed4-816f-bc1b3cf74c7f_540x.png?v=1762325707",  tag: "Hot" }
  ];

  const stats = [
    { icon: <Users />, value: "50K+", label: "Happy Customers" },
    { icon: <Award />, value: "1000+", label: "Premium Products" },
    { icon: <Star />, value: "4.9", label: "Customer Rating" },
    { icon: <Zap />, value: "24/7", label: "Support" }
  ];

  const testimonials = [
    { name: "Priya Sharma", image: "https://randomuser.me/api/portraits/women/1.jpg", rating: 5, text: "Amazing quality and fast delivery! The clothing fits perfectly and looks exactly like the pictures." },
    { name: "Rahul Verma", image: "https://randomuser.me/api/portraits/men/1.jpg", rating: 5, text: "Best online shopping experience. The customer service is exceptional and products are top-notch." },
    { name: "Ananya Reddy", image: "https://randomuser.me/api/portraits/women/2.jpg", rating: 5, text: "I'm obsessed! The styles are trendy and the quality is outstanding. Highly recommend I-SHAAA!" }
  ];

  return (
    <div className="relative min-h-screen bg-slate-50">

      {/* HERO SECTION */}
      <div className="relative w-full h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}>
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              style={{ transform: currentSlide === index ? `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(1.1)` : 'scale(1.1)' }}
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`}></div>
          </div>
        ))}

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-4">
          <div className="text-center space-y-8 max-w-5xl">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 animate-bounce">
              <Sparkles className="w-5 h-5 text-white" />
              <span className="text-sm font-semibold tracking-wide">{heroSlides[currentSlide].subtitle}</span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter">
              <span className="inline-block animate-fade-in-up bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">I-SHAAA</span><br/>
              <span className="inline-block animate-fade-in-up animation-delay-200 text-white">{heroSlides[currentSlide].title}</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-white/90 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
              Discover fashion that defines you. Premium quality meets unbeatable style.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-fade-in-up animation-delay-600">
              <button
                onClick={handleShopNow}
                className="group px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-3"
              >
                <ShoppingBag className="w-5 h-5" /> Shop Collection <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-4 border-2 border-white/80 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all transform hover:scale-105"
              >
                Explore More
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${currentSlide === index ? 'bg-white w-12' : 'bg-white/50 hover:bg-white/75 w-2'}`}
            />
          ))}
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-white border-y border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-black rounded-xl group-hover:scale-110 transition-all">
                  {React.cloneElement(stat.icon, { className: "w-6 h-6 text-white" })}
                </div>
              </div>
              <p className="text-3xl font-bold mb-1 text-black">{stat.value}</p>
              <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <section id="categories" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-5 py-2 bg-black text-white text-xs font-semibold rounded-full mb-3 tracking-wider uppercase">Collections</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">Shop by Style</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Curated collections designed to elevate your wardrobe</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => {
              const catProduct = products.find((p) => p.categoryId === cat.id);
              const productId = catProduct ? catProduct.id : cat.id;

              return (
                <div
                  key={cat.id}
                  onClick={() => window.location.href = `/product/${productId}`}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer bg-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="absolute top-4 left-4 z-20">
                    <span className={`px-3 py-1.5 rounded-full text-xs font-semibold shadow-md ${
                      cat.tag === 'New' ? 'bg-black text-white' : 
                      cat.tag === 'Hot' ? 'bg-red-600 text-white' : 
                      cat.tag === 'Sale' ? 'bg-green-600 text-white' : 
                      'bg-blue-600 text-white'
                    }`}>
                      {cat.tag}
                    </span>
                  </div>

                  <div className="aspect-[3/4] overflow-hidden">
                    <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white transform transition-all duration-300">
                    <p className="text-xs font-medium mb-1 opacity-90 uppercase tracking-wide">{cat.description}</p>
                    <h3 className="text-2xl font-bold mb-3">{cat.name}</h3>
                    <div className="flex items-center gap-2 text-sm font-semibold transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 items-center justify-center">
                      <span>Explore Collection</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Curated Looks Section - Pantaloons Style */}
      <section className="w-full py-16 bg-white">
        <h2 className="text-center text-4xl font-bold mb-12 text-black">
          Curated Looks For You
        </h2>

        <div className="relative max-w-7xl mx-auto px-4">
          {/* Navigation Arrows */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-all">
            <ArrowRight className="w-5 h-5 rotate-180" />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-all">
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Carousel Container */}
          <div className="flex items-center justify-center gap-4 overflow-x-auto scrollbar-hide">
            {[
              { img: "https://uptownie.com/cdn/shop/files/1_3e532f5c-d4b0-4e03-8775-55a3e7501c65_960x.png?v=1762348678", size: "small" },
              { img: "https://uptownie.com/cdn/shop/files/3_a49af978-c071-4a33-9f80-d94aa2c05922_540x.png?v=1762348678", size: "medium" },
              { img: "https://uptownie.com/cdn/shop/files/4_e74ed6d6-12d9-4d8e-86f0-3f68f42e7d0c_540x.png?v=1762348678", size: "large" },
              { img: "https://uptownie.com/cdn/shop/files/Generated_Image_October_03_2025_-_3_09PM_540x.png?v=1759488118", size: "medium" },
              { img: "https://uptownie.com/cdn/shop/files/25_0a21187d-9fba-4a39-af81-8db0b50849a4_540x.png?v=1758547900", size: "small" }
            ].map((item, idx) => {
              const sizeClasses = {
                small: "w-[200px] h-[300px]",
                medium: "w-[280px] h-[420px]",
                large: "w-[360px] h-[540px]"
              };
              
              return (
                <div
                  key={idx}
                  className={`relative flex-shrink-0 rounded-lg overflow-hidden group cursor-pointer ${sizeClasses[item.size]} shadow-md hover:shadow-xl transition-all`}
                >
                  <img
                    src={item.img}
                    alt={`Curated Look ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Shop All Button */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => window.location.href = "/products"}
                      className="px-6 py-2 bg-white text-black text-sm font-semibold rounded-full shadow-lg hover:bg-black hover:text-white transition-all flex items-center gap-2"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      Shop All
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="w-full flex justify-center my-6">
        <hr className="border-t border-gray-300 w-1/2" />
      </div>

      {/* Full-Width Video Story Section */}
      <section id="story" className="relative w-full overflow-hidden bg-black">
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60"></div>

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

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-5 py-2 bg-black text-white text-xs font-semibold rounded-full mb-3 tracking-wider uppercase">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">What Our Customers Say</h2>
            <p className="text-gray-600 text-lg">Real experiences from real fashionistas</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200">
                <div className="flex items-center gap-3 mb-5">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-200" />
                  <div>
                    <h4 className="font-semibold text-base text-black">{testimonial.name}</h4>
                    <div className="flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-black text-black" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Sparkles className="w-12 h-12 mx-auto mb-5" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Join Our Style Squad</h2>
          <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">Get exclusive access to new collections, special offers, and fashion tips</p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3.5 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-white/50 font-medium"
            />
            <button className="px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
              Subscribe <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <p className="mt-5 text-sm text-gray-400">Join 50,000+ fashion lovers already subscribed</p>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-black rounded-xl mb-3">
              <Truck className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold mb-1 text-black text-sm">Free Shipping</h4>
            <p className="text-xs text-gray-600">On orders above ₹500</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-black rounded-xl mb-3">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold mb-1 text-black text-sm">Secure Payment</h4>
            <p className="text-xs text-gray-600">100% protected</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-black rounded-xl mb-3">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold mb-1 text-black text-sm">Easy Returns</h4>
            <p className="text-xs text-gray-600">30-day return policy</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-black rounded-xl mb-3">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold mb-1 text-black text-sm">Premium Quality</h4>
            <p className="text-xs text-gray-600">Certified products</p>
          </div>
        </div>
      </section>

    </div>
  );
}