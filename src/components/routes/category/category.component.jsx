import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import { CategoriesContext } from "../../../context/categories.context";
import { selectCategoriesMap } from "../../../store/categories/category.selector";
import ProductCard from "../../product-card/product-card.component";

import "./category.styles.scss";
const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);

  // const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <>
      <h2 className="category-title">{category}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Category;
