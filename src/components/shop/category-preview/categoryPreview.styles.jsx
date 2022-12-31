import styled from "styled-components";

import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const Title = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(0, 1fr);
  row-gap: 50px;

  @media (min-width: 640px) {
    column-gap: 10px;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1024px) {
    column-gap: 20px;
    grid-template-columns: repeat(4, 1fr);
  }
`;
