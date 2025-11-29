import React, { useEffect, useState } from "react";
import API from "../Api/api"; // path നിങ്ങളുടെ project structure അനുസരിച്ച് set ചെയ്യുക

function TestAPI() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error("API error:", err));
  }, []);

  return (
    <div>
      <h1>Products List</h1>
      {products.length > 0 ? (
        products.map(p => (
          <div key={p.id}>
            <p>{p.name}</p>
            <p>Price: ${p.price}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default TestAPI;
