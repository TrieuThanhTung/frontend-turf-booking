import styled from "styled-components";
import { VNDFormating } from "../../utils/helper";
import { breakpoints, defaultTheme } from "../../styles/themes/default";
import { BookingType } from "../../utils/commonType";
import React from "react";
import { staticImages } from "../../utils/images";
import { Link } from "react-router-dom";
import { blue } from "@mui/material/colors";

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
  booking?: BookingType
}

const OrderItem: React.FC<Props> = ({ booking }) => {
  return (
    <OrderItemWrapper>
      <div className="order-item-details">
        <h3 className="text-x order-item-title">Order no: {booking?.id}</h3>
        <div className="order-info-group flex flex-wrap">
          <div className="order-info-item">
            <span className="text-gray font-semibold">Booking Date:</span>
            <span className="text-silver">{booking?.date}</span>
          </div>
          <div className="order-info-item">
            <span className="text-gray font-semibold">Time zone: </span>
            <span className="text-silver">{`${booking?.startTime} - ${booking?.endTime}`}</span>
          </div>
          <div className="order-info-item">
            <span className="text-gray font-semibold">Order Status:</span>
            <span className="text-silver">{"PENDING"}</span>
          </div>
        </div>
      </div>
      <div className="order-overview flex justify-between">
        <div className="order-overview-content grid">
          <div className="order-overview-img">
            <img
              src={booking?.turfImages || staticImages.ground_football}
              alt=""
              className="object-fit-cover"
            />
          </div>
          <div className="order-overview-info">
            <h4 className="text-xl"><Link to={`/turf/${booking?.turfId}`}>{booking?.turfName}</Link></h4>
            <ul>
              <li className="font-semibold text-base">
                <span>Total:</span>
                <span className="text-silver">
                  {VNDFormating(booking?.price)}
                </span>
              </li>
            </ul>
            <Link to={`/map?turf_lat=${booking?.location_lat}&turf_lon=${booking?.location_lon}`}>
                Chỉ đường
              </Link>
          </div>
        </div>
      </div>
    </OrderItemWrapper>
  );
};

export default OrderItem;
