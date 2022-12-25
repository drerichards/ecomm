import CategoryItem from "../category-item/CategoryItem";
import "./categories.styles.scss";

const Categories = ({ categoriesData }) => {
  return (
    <div className="categories-container">
      {categoriesData.map(({ id, title, imageUrl }) => (
        <CategoryItem key={id} title={title} imageUrl={imageUrl} />
      ))}
    </div>
  );
};

export default Categories;
