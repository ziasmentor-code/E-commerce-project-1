
import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { Plus, Minus, Heart, Star, ShoppingCart, Truck, Shield, RotateCcw } from "lucide-react";
import { CartContext } from "../Context/CartContext";
import { WishlistContext } from "../Context/WishlistContext";

const RatingStars = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const full = rating >= i;
    const half = rating >= i - 0.5 && rating < i;
    stars.push(
      <Star
        key={i}
        size={16}
        className={`${full ? "fill-yellow-400 text-yellow-400" : half ? "fill-yellow-300 text-yellow-300" : "text-gray-300"}`}
      />
    );
  }
  return <div className="flex items-center gap-0.5">{stars}</div>;
};

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { items: cart, addToCart, clearCart } = useContext(CartContext);
  const { wishlist, addToWishlist, removeFromWishlist } = useContext(WishlistContext);

  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  const sizes = ["S", "M", "L", "XL", "XXL"];

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchProduct = async () => {
      try {
        const res = await fetch("http://localhost:5015/products");
        const data = await res.json();
        const found = data.find((p) => String(p.id) === String(id));
        setProduct(found || null);
      } catch (err) {
        toast.error("Failed to load product");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const isWishlisted = product && wishlist.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    if (!product) return;
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!user) return toast.error("Please login first!");
    if (!selectedSize) return toast.error("Please select a size!");
    const exists = cart.find((item) => item.id === product.id && item.size === selectedSize);
    if (exists) return toast.error("Already in cart!");
    addToCart({ ...product, size: selectedSize, quantity });
    toast.success("Added to cart!");
  };

  const handleBuyNow = () => {
    if (!product) return;
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!user) return toast.error("Please login first!");
    if (!selectedSize) return toast.error("Please select a size!");
    clearCart();
    addToCart({ ...product, size: selectedSize, quantity });
    navigate("/checkout");
  };

  const handleWishlist = () => {
    if (!product) return;
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!user) return toast.error("Please login first!");
    if (isWishlisted) {
      removeFromWishlist(product.id);
      toast.success("Removed from wishlist");
    } else {
      addToWishlist(product);
      toast.success("Added to wishlist");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!product) return (
    <div className="text-center mt-10">
      <p className="text-xl">Product Not Found</p>
      <button className="px-6 py-2 bg-blue-600 text-white mt-3 rounded" onClick={() => navigate("/")}>
        Go Back
      </button>
    </div>
  );

  return (
    <div className="bg-white min-h-screen mt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="relative">
            <img src={product.image} alt={product.name} className="w-full h-[850px] object-cover rounded-lg border bg-gray-50"/>
            <button onClick={handleWishlist} className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition">
              <Heart size={22} fill={isWishlisted ? "red" : "none"} className={isWishlisted ? "text-red-500" : "text-gray-600"}/>
            </button>
          </div>

          <div>
            <h1 className="text-2xl font-bold mb-3">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <RatingStars rating={product.rating ?? 4.5}/>
              <span className="text-sm text-gray-600">{product.rating ?? 4.5} ({product.reviewsCount ?? 120} reviews)</span>
            </div>
            <div className="mb-6">
              <span className="text-2xl font-bold">₹{product.price}</span>
              <p className="text-sm text-green-600 mt-1">Inclusive of all taxes</p>
            </div>
            <div className="mb-6">
              <h3 className="text-sm font-semibold mb-2">Product Details</h3>
              <p className="text-gray-600 text-sm">{product.description}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-semibold mb-2">Select Size</h3>
              <div className="flex gap-2">
                {sizes.map((size) => (
                  <button key={size} onClick={() => setSelectedSize(size)} className={`w-11 h-11 border rounded flex items-center justify-center font-medium text-sm transition ${selectedSize === size ? "border-black bg-black text-white" : "border-gray-300 hover:border-gray-400"}`}>
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-semibold mb-2">Quantity</h3>
              <div className="flex items-center gap-3">
                <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="w-10 h-10 border rounded flex items-center justify-center hover:bg-gray-100"><Minus size={18}/></button>
                <span className="w-12 h-10 border rounded flex items-center justify-center font-medium">{quantity}</span>
                <button onClick={() => setQuantity((q) => q + 1)} className="w-10 h-10 border rounded flex items-center justify-center hover:bg-gray-100"><Plus size={18}/></button>
              </div>
            </div>

            <div className="flex gap-3 mb-6">
              <button onClick={handleAddToCart} className="flex-1 bg-yellow-500 text-white py-3 rounded font-semibold hover:bg-yellow-600 flex items-center justify-center gap-2"><ShoppingCart size={20}/> Add to Cart</button>
              <button onClick={handleBuyNow} className="flex-1 bg-orange-600 text-white py-3 rounded font-semibold hover:bg-orange-700">Buy Now</button>
            </div>

            <div className="border-t pt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-700"><Truck size={20} className="text-gray-600"/> <span>Free delivery on orders above ₹500</span></div>
              <div className="flex items-center gap-3 text-sm text-gray-700"><RotateCcw size={20} className="text-gray-600"/> <span>Easy 30-day return and exchange</span></div>
              <div className="flex items-center gap-3 text-sm text-gray-700"><Shield size={20} className="text-gray-600"/> <span>100% secure payments</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
