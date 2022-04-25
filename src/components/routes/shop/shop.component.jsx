import { useContext, Fragment } from "react";
import ProductCard from "../../product-card/product-card.component";

import { CategoriesContext } from "./../../../context/categories.context";
import "./shop.styles.scss";
const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => (
        <Fragment key={title}>
          <h2
            style={{
              margin: "10px 30px 0 30px",
              borderBottom: "1px solid gray",
              textAlign: "center",
            }}
          >
            {title.toUpperCase()}
          </h2>
          <div className="products-container">
            {categoriesMap[title].map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </div>
        </Fragment>
      ))}
    </>
  );
};

export default Shop;
