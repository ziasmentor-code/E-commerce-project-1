import { useParams } from "react-router-dom";

function CategoryProducts() {
  const { id } = useParams();

  return (
    <div>
      <h2>Products in Category {id}</h2>
      <p>Display products for this category here.</p>
    </div>
  );
}

export default CategoryProducts;
