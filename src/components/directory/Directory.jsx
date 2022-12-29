import DirectoryItem from "components/directory/directory-item/DirectoryItem";
import "./directory.scss";

const Directory = ({ categoriesData }) => {
  return (
    <div className="directory-container">
      {categoriesData.map(({ id, title, imageUrl }) => (
        <DirectoryItem key={id} title={title} imageUrl={imageUrl} />
      ))}
    </div>
  );
};

export default Directory;
