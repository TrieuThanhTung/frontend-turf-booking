import styled from "styled-components";
import { Container } from "../../styles/styles";
import { UserContent, UserDashboardWrapper } from "../../styles/user";
import UserMenu from "../../components/user/UserMenu";
import Title from "../../components/common/Title";
import { breakpoints, defaultTheme } from "../../styles/themes/default";
import { dataBookings, orderData } from "../../data/data";
import OrderItemList from "../../components/user/OrderItemList";
import { useEffect, useState } from "react";
import { BookingsType } from "../../utils/commonType";
import TurfApi from "../../api/TurfApi";
import { Pagination } from "@mui/material";

const OrderListScreenWrapper = styled.div`
  .order-tabs-contents {
    margin-top: 40px;
  }
  .order-tabs-head {
    min-width: 170px;
    padding: 12px 0;
    border-bottom: 3px solid ${defaultTheme.color_whitesmoke};

    &.order-tabs-head-active {
      border-bottom-color: ${defaultTheme.color_outerspace};
    }

    @media (max-width: ${breakpoints.lg}) {
      min-width: 120px;
    }

    @media (max-width: ${breakpoints.xs}) {
      min-width: 80px;
    }
  }
`;

const OrderListScreen = () => {
  const [bookingsPage, setBookingsPage] = useState<BookingsType>(dataBookings)

  const getBookingsPage = async (page?: string | number, status?: string) => {

    try {
      const res = await TurfApi.getBookings(page, status);
      if (res.status === 200) {
        setBookingsPage(res.data.data);
      }
    } catch (error) {
      console.error("Error fetching account data:", error);
    }
  }

  useEffect(() => {
    getBookingsPage()
  }, [])

  return (
    <OrderListScreenWrapper className="page-py-spacing">
      <Container>
        <UserDashboardWrapper>
          <UserMenu />
          <UserContent>
            <Title titleText={"My Orders"} />
            <div className="order-tabs">
              <div className="order-tabs-heads">
                <button
                  type="button"
                  className="order-tabs-head text-xl italic order-tabs-head-active"
                  data-id="active"
                >
                  Active
                </button>
                <button
                  type="button"
                  className="order-tabs-head text-xl italic "
                  data-id="cancelled"
                >
                  Cancelled
                </button>
                <button
                  type="button"
                  className="order-tabs-head text-xl italic"
                  data-id="completed"
                >
                  Completed
                </button>
              </div>

              <div className="order-tabs-contents">
                <div className="order-tabs-content" id="active">
                    <OrderItemList orders = {orderData} bookings={bookingsPage}/>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                      <Pagination count={bookingsPage.totalPages} page={bookingsPage.currentPage}  variant="outlined" shape="rounded" />
                    </div>
                </div>
              </div>
            </div>
          </UserContent>
        </UserDashboardWrapper>
      </Container>
    </OrderListScreenWrapper>
  );
};

export default OrderListScreen;
