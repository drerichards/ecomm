import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directoryItem.styles.jsx";

const DirectoryItem = ({ title, imageUrl }) => {
  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
