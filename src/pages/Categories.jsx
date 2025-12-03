import { Link } from "react-router-dom";

function Categories() {

  const categories = [
    { id: 1, name: "Drop Collection" },
    { id: 2, name: "Premium Coats" },
    { id: 3, name: "Trendy Tops" }
  ];

  return (
    <div>
      <h2>Categories</h2>

      {categories.map(cat => (
        <div key={cat.id}>
          <Link to={`/categories/${cat.id}`}>{cat.name}</Link>
        </div>
      ))}
    </div>
  );
}

export default Categories;
