import React, { useState } from "react";
import styled from "styled-components";
import { productDescriptionTabHeads } from "../../data/data";
import Title from "../common/Title";
import { ContentStylings } from "../../styles/styles";
import { breakpoints, defaultTheme } from "../../styles/themes/default";
import Map from "../map/Map";
import "./ProductDesTab.css"
import { LocationType } from "../map/data/Util";

const DetailsContent = styled.div`
  margin-top: 60px;
  @media (max-width: ${breakpoints.lg}) {
    margin-top: 40px;
  }

  .details-content-wrapper {
    grid-template-columns: auto 500px;
    gap: 40px;

    @media (max-width: ${breakpoints.xl}) {
      grid-template-columns: auto 400px;
    }

    @media (max-width: ${breakpoints.lg}) {
      grid-template-columns: 100%;
      gap: 24px;
    }
  }
`;

const DescriptionTabsWrapper = styled.div`
  .tabs-heads {
    column-gap: 20px;
    row-gap: 16px;
    margin-bottom: 24px;

    @media (max-width: ${breakpoints.sm}) {
      flex-wrap: wrap;
      margin-bottom: 16px;
    }

    @media (max-width: ${breakpoints.xs}) {
      gap: 12px;
    }
  }

  .tabs-head {
    padding-bottom: 16px;
    position: relative;

    &-active {
      color: ${defaultTheme.color_outerspace};

      &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 100%;
        width: 40px;
        height: 1px;
        background-color: ${defaultTheme.color_outerspace};
      }
    }

    @media(max-width: ${breakpoints.sm}){
        padding-bottom: 12px;
    }
  }

  .tabs-badge{
    width: 20px;
    height: 20px;
    border-radius: 4px;
    font-size: 10px;
    margin-left: 6px;

    &-purple{
        background-color: ${defaultTheme.color_purple};
    }

    &-outerspace{
        background-color: ${defaultTheme.color_outerspace};
    }
  }

  .tabs-contents{
    max-height: 400px;
    overflow-y: scroll;

    &::-webkit-scrollbar{
        width: 6px;
    }

    &::-webkit-scrollbar-track{
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
        border-radius: 12px;
    }

    &::-webkit-scrollbar-thumb{
        background-color: ${defaultTheme.color_platinum};
        border-radius: 12px;
    }
  }

  .tabs-content{
    display: none;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.02);

    &.show{
        display: block;
    }

    @media(max-width: ${breakpoints.sm}){
        padding: 12px;
    }
  }
`;

type Props = {
  turfLocation?: LocationType
}

const ProductDescriptionTab: React.FC<Props>  = ({turfLocation}) => {
  const [activeDesTab, setActiveDesTab] = useState(
    productDescriptionTabHeads[0].tabHead
  );

  const handleTabChange = (tabHead: string) => {
    setActiveDesTab(tabHead);
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [centerLocation, setCenterLocation] = useState<LocationType>({
    lat: 21.0245,
    lon: 105.84117
  })
  return (
    <DetailsContent>
      <Title titleText={"Product Description"} />
      <div className="details-content-wrapper grid">
        <DescriptionTabsWrapper>
          <div className="tabs-heads flex items-center flex-wrap">
            {productDescriptionTabHeads.map((tab) => {
              return (
                <button
                  key={tab.id}
                  type="button"
                  className="tabs-head text-gray font-medium text-lg flex items-center"
                  onClick={() => handleTabChange(tab.tabHead)}
                >
                  <span
                    className={`${tab.tabHead === activeDesTab ? "text-sea-green" : ""
                      }`}
                  >
                    {tab.tabText}
                  </span>
                  {tab.badgeValue && (
                    <span
                      className={`tabs-badge inline-flex items-center justify-center text-white tabs-badge-${tab.badgeColor}`}
                    >
                      {tab.badgeValue}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
          <div className="tabs-contents">
            <div
              className={`tabs-content ${activeDesTab === "tabDescription" ? "show" : ""
                }`}
            >
              <ContentStylings>
                <p>
                  Sân bóng The One Gamuda được nhiều người chơi biết đến vì địa điểm sân thuộc hệ thống khu đô thị Gamuda Gardens - nổi tiếng là 1 trong những khu đô thị đáng sống nhất ở Hà Nội và vị trí đắc địa cách trung tâm Hà Nội chỉ 25 phút đi xe. Ngoài ra, The One Gamuda còn thu hút người chơi nhờ các dịch vụ tiện ích, chất lượng sân đạt chuẩn, trang thiết bị hiện đại đáp ứng nhu cầu người chơi.
                </p>
                <p>
                  Sân bóng đá The One Gamuda có quy mô 3 sân đạt chuẩn kích thước 7 hoặc 11 người, phù hợp cho cả giải đấu lớn và giao hữu.
                  Số Lượng sân : 01 sân 7 người, 02 sân 11 người
                  Kích Thước sân : 1 sân Dài (55m) Ngang (35m) , 2 sân Dài (90m) Ngang (45m)
                  Tổng diện tích : 1925m2, 2x4050m2
                  Tình trạng kinh doanh : Tốt
                </p>
              </ContentStylings>
            </div>
            <div
              className={`tabs-content content-stylings ${activeDesTab === "tabComments" ? "show" : ""
                }`}
            >
              User comments here.
            </div>
          </div>
        </DescriptionTabsWrapper>
        <Map  
          centerLocation={centerLocation}
          turfLocation={turfLocation}
        />
      </div>
    </DetailsContent>
  );
};

export default ProductDescriptionTab;
