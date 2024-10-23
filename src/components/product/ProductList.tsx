import styled from "styled-components";
import { products } from "../../data/data";
import ProductItem from "./ProductItem";
import { breakpoints } from "../../styles/themes/default";
import { ProductType } from "../../utils/commonType";
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
}

const ProductList:React.FC<ProductListProps> = () => {
  return (
    <ProductListWrapper className="grid">
      {products?.map((product) => {
        return <ProductItem key={product.id} product={product} />;
      })}
    </ProductListWrapper>
  );
};

export default ProductList;
