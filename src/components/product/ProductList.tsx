import styled from "styled-components";
import ProductItem from "./ProductItem";
import { breakpoints } from "../../styles/themes/default";
import { ProductType, TurfField } from "../../utils/commonType";
import React from "react";

const ProductListWrapper = styled.div`
  column-gap: 20px;
  row-gap: 40px;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));

  @media (max-width: ${breakpoints.sm}) {
    gap: 12px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

type ProductListProps = {
  products?: ProductType[]
  turfs?: TurfField[]
}

const ProductList:React.FC<ProductListProps> = ({turfs}) => {
  return (
    <ProductListWrapper className="grid">
      {turfs?.map((turf) => {
        return <ProductItem key={turf.id} turf={turf} />;
      })}
    </ProductListWrapper>
  );
};

export default ProductList;
