import CategoryItem from "components/category-item/CategoryItem";
import "./directory.scss";

const Directory = ({ categoriesData }) => {
  return (
    <div className="directory-container">
      {categoriesData.map(({ id, title, imageUrl }) => (
        <CategoryItem key={id} title={title} imageUrl={imageUrl} />
      ))}
    </div>
  );
};

export default Directory;
