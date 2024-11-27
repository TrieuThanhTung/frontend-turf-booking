import styled from "styled-components";
import { VNDFormating } from "../../../utils/helper";
import { breakpoints, defaultTheme } from "../../../styles/themes/default";
import { TurfField } from "../../../utils/commonType";
import React from "react";
import { staticImages } from "../../../utils/images";
import { BaseLinkBlack } from "../../../styles/button";
import { Link } from "react-router-dom";

const OrderItemWrapper = styled.div`
  margin: 30px 0;
  border-bottom: 1px solid ${defaultTheme.color_anti_flash_white};

  .order-item-title {
    margin-bottom: 12px;
  }

  .order-item-details {
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 24px 32px;
    border-radius: 8px;

    @media (max-width: ${breakpoints.sm}) {
      padding: 20px 24px;
    }

    @media (max-width: ${breakpoints.xs}) {
      padding: 12px 16px;
    }
  }

  .order-info-group {
    @media (max-width: ${breakpoints.sm}) {
      flex-direction: column;
    }
  }

  .order-info-item {
    width: 50%;

    span {
      &:nth-child(2) {
        margin-left: 4px;
      }
    }

    &:nth-child(even) {
      text-align: right;
      @media (max-width: ${breakpoints.lg}) {
        text-align: left;
      }
    }

    @media (max-width: ${breakpoints.sm}) {
      width: 100%;
      margin: 2px 0;
    }
  }

  .order-overview {
    margin: 28px 0;
    gap: 12px;

    @media (max-width: ${breakpoints.lg}) {
      margin: 20px 0;
    }

    @media (max-width: ${breakpoints.sm}) {
      flex-direction: column;
    }

    &-img {
      width: 100px;
      height: 100px;
      border-radius: 6px;
      overflow: hidden;
    }

    &-content {
      grid-template-columns: 100px auto;
      gap: 18px;
    }

    &-info {
      ul {
        span {
          &:nth-child(2) {
            margin-left: 4px;
          }
        }
      }
    }
  }
`;

type Props = {
  turf: TurfField
}

const TurfItem: React.FC<Props> = ({ turf }) => {
  return (
    <OrderItemWrapper>
      <div className="order-item-details">
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <h3 className="text-x order-item-title"><Link to={`/turf/${turf.id}`}>Name: {turf.name}</Link></h3>
          <div className="btn-and-price flex items-center flex-wrap">
                <BaseLinkBlack
                  className="prod-add-btn"
                  to={`/manage/turf/${turf.id}`}
                >
                  <span className="prod-add-btn-icon">
                    <i className="bi bi-cart2"></i>
                  </span>
                  <span className="prod-add-btn-text"> <b> Edit </b></span>
                </BaseLinkBlack>
              </div>
        </div>
        <div className="order-info-group flex flex-wrap">
          <div className="order-info-item">
            <span className="text-gray font-semibold">Price zone: </span>
            <span className="text-silver">{`${VNDFormating(turf.prices[0].price)} - ${VNDFormating(turf.prices[turf.prices.length-1].price)}`}</span>
          </div>
          <div className="order-info-item">
            <span className="text-gray font-semibold">Address:</span>
            <span className="text-silver">{turf.address}</span>
          </div>
          <div className="order-info-item">
            <span className="text-gray font-semibold">Created at:</span>
            <span className="text-silver">{turf.createdAt}</span>
          </div>
        </div>
      </div>
      <div className="order-overview flex justify-between">
        <div className="order-overview-content grid">
          <div className="order-overview-img">
            <img
              src={turf.images[0]?.url || staticImages.ground_football}
              alt=""
              className="object-fit-cover"
            />
          </div>
        </div>
      </div>
    </OrderItemWrapper>
  );
};

export default TurfItem;
