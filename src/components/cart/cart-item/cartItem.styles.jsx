import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
  img {
    width: 30%;
  }
`;

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

export const Name = styled.span`
  font-size: 16px;
  opacity: 0.6;
`;

export const HorizontalLine = styled.hr`
  width: 100%;
  margin-top: 0.3em;
`;

export const PriceContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
