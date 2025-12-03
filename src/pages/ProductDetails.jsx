


import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { WishlistContext } from "../Context/WishlistContext";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [openSection, setOpenSection] = useState(null);

  // Scroll to top whenever the id changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  useEffect(() => {
    // Reset product state when ID changes
    setProduct(null);
    setOpenSection(null);
    
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:5008/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.log("Fetch Error:", err);
      }
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const res = await fetch("http://localhost:5008/products");
        const data = await res.json();
        // Filter out current product and get 4 random related products
        const filtered = data.filter((p) => p.id !== parseInt(id));
        const shuffled = filtered.sort(() => 0.5 - Math.random());
        setRelatedProducts(shuffled.slice(0, 4));
      } catch (err) {
        console.log("Related Products Error:", err);
      }
    };
    
    if (product) {
      fetchRelatedProducts();
    }
  }, [product, id]);

  const handleRelatedProductClick = (productId) => {
    // Navigate to the new product
    navigate(`/product/${productId}`);
  };

  if (!product) return <p className="text-center p-20">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Product Details */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            
            {/* LEFT IMAGE */}
            <div className="relative bg-gray-100 p-8 lg:p-12">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            {/* RIGHT DETAILS */}
            <div className="p-8 lg:p-12">
              <div className="mb-6">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>

                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-3xl font-bold text-gray-900">
                    ₹{product.price}
                  </span>
                  <span className="text-sm text-green-600 font-medium">
                    Inclusive of all taxes
                  </span>
                </div>

                <p className="text-gray-600 leading-relaxed text-base">
                  {product.description}
                </p>
              </div>

              {/* Add to Cart + Wishlist */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8 pb-8 border-b">
                <button
                  onClick={() => addToCart(product)}
                  className="flex-1 px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-900 transition-colors duration-200"
                >
                  Add to Cart
                </button>

                <button
                  onClick={() => addToWishlist(product)}
                  className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors duration-200"
                >
                  ♡ Wishlist
                </button>
              </div>

              {/* INFO SECTIONS */}
              <div className="space-y-1">
                <Accordion
                  title="Fabric & Care"
                  open={openSection === "fabric"}
                  onClick={() =>
                    setOpenSection(openSection === "fabric" ? null : "fabric")
                  }
                >
                  <p className="text-gray-600">{product.fabric || "N/A"}</p>
                  <p className="text-gray-600">Machine Wash</p>
                </Accordion>

                <Accordion
                  title="Fit Type"
                  open={openSection === "fit"}
                  onClick={() =>
                    setOpenSection(openSection === "fit" ? null : "fit")
                  }
                >
                  <p className="text-gray-600">{product.fit || "Regular Fit"}</p>
                </Accordion>

                <Accordion
                  title="Manufactured & Origin"
                  open={openSection === "origin"}
                  onClick={() =>
                    setOpenSection(openSection === "origin" ? null : "origin")
                  }
                >
                  <p className="text-gray-600">Manufactured by: Demo Fashion Pvt Ltd</p>
                  <p className="text-gray-600">Country of Origin: India</p>
                </Accordion>

                <Accordion
                  title="Delivery & Return"
                  open={openSection === "delivery"}
                  onClick={() =>
                    setOpenSection(openSection === "delivery" ? null : "delivery")
                  }
                >
                  <p className="text-gray-600">7-day return available.</p>
                  <p className="text-gray-600">Free delivery above ₹500.</p>
                </Accordion>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                You May Also Like
              </h2>
              <button
                onClick={() => navigate("/product")}
                className="text-gray-600 hover:text-gray-900 font-medium flex items-center gap-2"
              >
                View All
                <span>→</span>
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <div
                  key={relatedProduct.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer group"
                  onClick={() => handleRelatedProductClick(relatedProduct.id)}
                >
                  <div className="relative overflow-hidden bg-gray-100 aspect-square">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Quick Action Buttons */}
                    <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          addToWishlist(relatedProduct);
                        }}
                        className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                        title="Add to Wishlist"
                      >
                        <svg
                          className="w-5 h-5 text-gray-700"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </button>
                      
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(relatedProduct);
                        }}
                        className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                        title="Add to Cart"
                      >
                        <svg
                          className="w-5 h-5 text-gray-700"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-sm lg:text-base">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-gray-600 text-xs lg:text-sm mb-3 line-clamp-2">
                      {relatedProduct.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg lg:text-xl font-bold text-gray-900">
                        ₹{relatedProduct.price}
                      </span>
                      <span className="text-xs text-green-600 font-medium">
                        Free Shipping
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Accordion({ title, children, open, onClick }) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center py-4 text-left hover:bg-gray-50 transition-colors duration-150 rounded-lg px-2"
      >
        <span className="font-semibold text-gray-900">{title}</span>
        <span className="text-2xl text-gray-600 font-light">
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <div className="px-2 pb-4 space-y-2 text-sm">
          {children}
        </div>
      )}
    </div>
  );
}