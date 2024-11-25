import styled from "styled-components";
import { Container } from "../../../styles/styles";
import { UserContent, UserDashboardWrapper } from "../../../styles/user";
import UserMenu from "../../../components/user/UserMenu";
import Title from "../../../components/common/Title";
import { breakpoints, defaultTheme } from "../../../styles/themes/default";
import { useEffect, useState } from "react";
import { TurfField } from "../../../utils/commonType";
import TurfApi from "../../../api/TurfApi";
import { Pagination } from "@mui/material";
// import { useNavigate, useSearchParams } from "react-router-dom";
import TurfItem from "../../../components/user/manage/TurfItem";
import { BaseLinkGreen } from "../../../styles/button";

const ManageTurfListWrapper = styled.div`
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

const ManageTurfList = () => {

  const [data, setData] = useState<{
    turfs: TurfField[];
    currentPage: number;
    totalPages: number;
  }>();

  const getTurfs = async (page?: string) => {
    try {
      const response = await TurfApi.getTurfs(page);
      if (response.status === 200) {
        setData(response.data.data);
      }
      console.log("data", response.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTurfs();
  }, [])

  return (
    <ManageTurfListWrapper className="page-py-spacing">
      <Container>
        <UserDashboardWrapper>
          <UserMenu />
          <UserContent>
            <Title titleText={"Turfs"} />
            <div className="order-tabs">
              <div className="btn-and-price flex items-center flex-wrap" style={{justifyContent: 'flex-end'}}>
                  <BaseLinkGreen
                    className="prod-add-btn"
                    to={`/manage/turfs/new`}
                  >
                    <span className="prod-add-btn-icon">
                      <i className="bi bi-cart2"></i>
                    </span>
                    <span className="prod-add-btn-text"> <b> New Turf </b></span>
                  </BaseLinkGreen>
                </div>
              <div className="order-tabs-contents">
                <div className="order-tabs-content" id="active">
                    {data?.turfs?.map((turf, index) => {
                      return <TurfItem turf={turf} key={index}/>
                    })}
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                      <Pagination count={data?.totalPages} page={data?.currentPage} variant="outlined" shape="rounded" />
                    </div>
                </div>
              </div>
            </div>
          </UserContent>
        </UserDashboardWrapper>
      </Container>
    </ManageTurfListWrapper>
  );
};

export default ManageTurfList;
