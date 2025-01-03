import { Link } from "react-router-dom";
import styled from "styled-components";
import { commonCardStyles } from "../../styles/card";
import { breakpoints, defaultTheme } from "../../styles/themes/default";
import React from "react";
import { ProductType, TurfField } from "../../utils/commonType";
import { staticImages } from "../../utils/images";

const ProductCardWrapper = styled(Link)`
  ${commonCardStyles}
  @media(max-width: ${breakpoints.sm}) {
    padding-left: 0;
    padding-right: 0;
  }

  .product-img {
    height: 300px;
    position: relative;

    @media (max-width: ${breakpoints.sm}) {
      height: 320px;
    }
  }

  .product-wishlist-icon {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 32px;
    height: 32px;
    border-radius: 100%;

    &:hover {
      background-color: ${defaultTheme.color_yellow};
      color: ${defaultTheme.color_white};
    }
  }
`;

const ProductItem:React.FC<{
  product?: ProductType
  turf?: TurfField
}> = ({ turf }) => {
  return (
    <ProductCardWrapper key={turf?.id} to={`/turf/${turf?.id}`}>
      <div className="product-img">
        <img className="object-fit-cover" src={turf?.images[0]?.url || staticImages.ground_football} />
      </div>
      <div className="product-info">
        <p className="font-bold">{turf?.name}</p>
        <div className="flex items-center justify-between text-sm font-medium">
          <span className="text-gray">{turf?.address}</span>
        </div>
      </div>
    </ProductCardWrapper>
  );
};

export default ProductItem;
