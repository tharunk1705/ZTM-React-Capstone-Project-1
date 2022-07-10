import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../../store/categories/category.selector";
import CategoryPreview from "./../../category-preview/category-preview.component";

// import { CategoriesContext } from "./../../../context/categories.context";
const CategoriesPreview = () => {
  // const { categoriesMap } = useContext(CategoriesContext);

  const categoriesMap = useSelector(selectCategoriesMap);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
