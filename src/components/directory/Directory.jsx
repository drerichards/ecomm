import DirectoryItem from "components/directory/directory-item/DirectoryItem";
import {DirectoryContainer} from "./directory.styles.jsx";

const Directory = ({ categoriesData }) => {
  return (
    <DirectoryContainer>
      {categoriesData.map(({ id, title, imageUrl }) => (
        <DirectoryItem key={id} title={title} imageUrl={imageUrl} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
