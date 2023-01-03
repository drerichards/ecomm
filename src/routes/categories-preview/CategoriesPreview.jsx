import { useSelector } from "react-redux";
import { selectCategories } from "store/categories/categories.selector";
import CategoryPreview from "components/shop/category-preview/CategoryPreview";

const CategoriesPreview = () => {
  const categories = useSelector(selectCategories)

  return (
    <div>
      {Object.keys(categories).map((title) => {
        const products = categories[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};

export default CategoriesPreview;