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
import { useNavigate, useSearchParams } from "react-router-dom";

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
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

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
    const page = searchParams.get('page') || undefined;
    const status = searchParams.get('status') || undefined;
    getBookingsPage(page, status)
  }, [searchParams])

  const handleChangPage = async (_event: React.ChangeEvent<unknown>, page: number) => {
    const urlParams = new URLSearchParams(searchParams)
    urlParams.set('page', page.toString())
    navigate(`?${urlParams.toString()}`)
  }

  const handleChangeStatus = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const urlParams = new URLSearchParams(searchParams)
    urlParams.set('status', e.currentTarget.value)
    urlParams.set('page', "1")
    console.log(urlParams.toString())
    navigate(`?${urlParams.toString()}`)
  }


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
                  className={`order-tabs-head text-xl italic ${(!searchParams.get('status') || searchParams.get('status') === 'PENDING') && "order-tabs-head-active"}`}
                  data-id="active"
                  value="PENDING"
                  onClick={handleChangeStatus}
                >
                  Chờ thanh toán
                </button>
                <button
                  type="button"
                  className={`order-tabs-head text-xl italic ${searchParams.get('status') === 'PAID' && "order-tabs-head-active"}`}
                  value="PAID"
                  onClick={handleChangeStatus}
                >
                  Đã thanh toán
                </button>
                <button
                  type="button"
                  className={`order-tabs-head text-xl italic ${searchParams.get('status') === 'DONE' && "order-tabs-head-active"}`}
                  value="DONE"
                  onClick={handleChangeStatus}
                >
                  Đã hoàn thành
                </button>
                <button
                  type="button"
                  className={`order-tabs-head text-xl italic ${searchParams.get('status') === 'CANCELLED' && "order-tabs-head-active"}`}
                  value="CANCELLED"
                  onClick={handleChangeStatus}
                >
                  Đã hủy
                </button>
              </div>

              <div className="order-tabs-contents">
                <div className="order-tabs-content" id="active">
                    <OrderItemList orders = {orderData} bookings={bookingsPage}/>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                      <Pagination count={bookingsPage.totalPages} page={bookingsPage.currentPage} onChange={handleChangPage} variant="outlined" shape="rounded" />
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
