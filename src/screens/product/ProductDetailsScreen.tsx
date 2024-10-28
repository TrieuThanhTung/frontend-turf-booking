import styled from "styled-components";
import { Container } from "../../styles/styles";
import './Product.css'
import ProductPreview from "../../components/product/ProductPreview";
import { Link } from "react-router-dom";
import { BaseLinkGreen } from "../../styles/button";
import { VNDFormating } from "../../utils/helper";
import { breakpoints, defaultTheme } from "../../styles/themes/default";
import ProductDescriptionTab from "../../components/product/ProductDescriptionTab";
import ProductSimilar from "../../components/product/ProductSimilar";
import ProductServices from "../../components/product/ProductServices";
import { TurfField } from "../../utils/commonType";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TurfApi from "../../api/TurfApi";
import Rating from '@mui/material/Rating';
import BasicDatePicker from "../../components/Helper/BasicDatePicker";

const DetailsScreenWrapper = styled.main`
  margin: 40px 0;
`;

const DetailsContent = styled.div`
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;

  @media (max-width: ${breakpoints.xl}) {
    gap: 24px;
    grid-template-columns: 3fr 2fr;
  }

  @media (max-width: ${breakpoints.lg}) {
    grid-template-columns: 100%;
  }
`;

const ProductDetailsWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 24px;

  @media (max-width: ${breakpoints.sm}) {
    padding: 16px;
  }

  @media (max-width: ${breakpoints.xs}) {
    padding: 12px;
  }

  .prod-title {
    margin-bottom: 10px;
  }
  .rating-and-comments {
    column-gap: 16px;
    margin-bottom: 20px;
  }
  .prod-rating {
    column-gap: 10px;
  }
  .prod-comments {
    column-gap: 10px;
  }
  .prod-add-btn {
    min-width: 160px;
    column-gap: 8px;
    &-text {
      margin-top: 2px;
    }
  }

  .btn-and-price {
    margin-top: 36px;
    column-gap: 16px;
    row-gap: 10px;

    @media (max-width: ${breakpoints.sm}) {
      margin-top: 24px;
    }
  }
`;

const ProductSizeWrapper = styled.div`
  .prod-size-top {
    gap: 20px;
  }
  .prod-size-list {
    gap: 12px;
    margin-top: 16px;
    @media (max-width: ${breakpoints.sm}) {
      gap: 8px;
    }
  }

  .prod-size-item {
    position: relative;
    height: 38px;
    width: 38px;
    cursor: pointer;

    @media (max-width: ${breakpoints.sm}) {
      width: 32px;
      height: 32px;
    }

    input {
      position: absolute;
      top: 0;
      left: 0;
      width: 38px;
      height: 38px;
      opacity: 0;
      cursor: pointer;

      @media (max-width: ${breakpoints.sm}) {
        width: 32px;
        height: 32px;
      }

      &:checked + span {
        color: ${defaultTheme.color_white};
        background-color: ${defaultTheme.color_outerspace};
        border-color: ${defaultTheme.color_outerspace};
      }
    }

    span {
      width: 38px;
      height: 38px;
      border-radius: 8px;
      border: 1.5px solid ${defaultTheme.color_silver};
      text-transform: uppercase;

      @media (max-width: ${breakpoints.sm}) {
        width: 32px;
        height: 32px;
      }
    }
  }
`;

const ProductDetailsScreen = () => {
  window.scrollTo(0, 0)
  const { id } = useParams(); // Get the 'id' parameter from the URL

  const [dataTurf, setDataTurf] = useState<TurfField>({
    id: 0,
    name: "",
    description: "",
    images: [],
    rating: 0,
    address: "",
    location_lat: 0,
    location_lon: 0,
    status: "ENABLE",
    prices: [], 
    createdAt: "16:23 10/17/2024",
    updatedAt: "16:23 10/17/2024"
  })

  const getTurfById = async (id: string) => {
    try {
      const res = await TurfApi.getTurfById(id)
      setDataTurf(res.data.data)  // Set the fetched data to the state
      console.log(res.data.data) // Log the fetched data to the console
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (id) {
      getTurfById(id); // Call the function with the 'id' parameter
    }
  }, [id]); // Add 'id' to the dependency array to re-run the effect when 'id' changes

  return (
    <DetailsScreenWrapper>
      <Container>
        <DetailsContent className="grid">
          <ProductPreview previewImages={dataTurf.images} />
          <ProductDetailsWrapper>
            <h2 className="prod-title">{dataTurf?.name}</h2>
            <div className="flex items-center rating-and-comments flex-wrap">
              <div className="prod-rating flex items-center">
                <Rating name="read-only" value={dataTurf?.rating | 0} readOnly />
                <span className="text-gray text-xs">{dataTurf?.rating}</span>
              </div>
            </div>

            <ProductSizeWrapper>
              <div className="prod-size-top flex items-center flex-wrap">
                <p className="text-lg font-semibold text-outerspace">
                  Khung giờ
                </p>
                <Link to="/" className="text-lg text-gray font-medium">
                  Size Guide &nbsp; <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
              <div style={{display: "flex", flexWrap: "wrap"}}>
                {dataTurf.prices.map((priceOption, index) => (
                  <div className="frame-price" key={index}>
                    <p> <b> {priceOption.start_time} - {priceOption.end_time} </b> </p>
                    <span className="flex items-center justify-center font-medium text-outerspace">
                      {VNDFormating(priceOption.price)}
                    </span>
                  </div>
                ))}
              </div>
            </ProductSizeWrapper>
            <ProductSizeWrapper>
              <div className="prod-size-top flex items-center flex-wrap">
                <p className="text-lg font-semibold text-outerspace">
                  Ngày
                </p>
                <BasicDatePicker />
              </div>
            </ProductSizeWrapper>
            <div className="btn-and-price flex items-center flex-wrap">
              <BaseLinkGreen
                to="/cart"
                as={BaseLinkGreen}
                className="prod-add-btn"
              >
                <span className="prod-add-btn-icon">
                  <i className="bi bi-cart2"></i>
                </span>
                <span className="prod-add-btn-text"> <b> Đặt </b></span>
              </BaseLinkGreen>
            </div>
            <ProductServices />
          </ProductDetailsWrapper>
        </DetailsContent>
        <ProductDescriptionTab />
        <ProductSimilar />
      </Container>
    </DetailsScreenWrapper>
  );
};

export default ProductDetailsScreen;
