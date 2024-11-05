import styled from "styled-components";
import { Container } from "../../styles/styles";
import './Product.css'
import ProductPreview from "../../components/product/ProductPreview";
import { Link, useNavigate } from "react-router-dom";
import { BaseButtonGreen } from "../../styles/button";
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
import { ToastContainer, toast } from 'react-toastify';
import { BasicDatePicker } from "../../components/Helper/BasicDatePicker";
import dayjs from "dayjs";
import { LocationType } from "../../components/map/data/Util";

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
  const navigate = useNavigate()
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

  const [turfLocation, setTurfLocation] = useState<LocationType>()

  const getTurfById = async (id: string) => {
    try {
      const res = await TurfApi.getTurfById(id)
      setDataTurf(res.data.data)  // Set the fetched data to the state
      setTurfLocation({
        lat: res.data.data.location_lat,
        lon: res.data.data.location_lon
      }) 
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

  const[valueDate, setValueDate] = useState<dayjs.Dayjs | null>();

  const [turfPriceId, setTurfPriceId] = useState(0)

  const handleBooking = async () => {
    const day = valueDate?.$D >= 10 ? valueDate?.$D : `0${valueDate?.$D}` 
    const dataBooking = {
      turfId: Number(id),
      turfPriceId: turfPriceId,
      dateBooking: `${valueDate?.$y}-${valueDate?.$M + 1}-${day}`
    }
    if (!valueDate) {
      toast.error('Vui lòng chọn ngày đặt sân')
      return;
    }
    if (dataBooking.turfPriceId === 0) {
      toast.error('Vui lòng chọn thời gian')
      return;
    }
    if (!dataBooking.turfId  || !dataBooking.turfPriceId ) return;
    try {
      const res = await TurfApi.createBooking(dataBooking)
      if (res.status === 201) {
        toast.success('Đặt sân thành công')
      } else if (res.status === 401) {
        toast.error('Yêu cầu đăng nhập')
        setTimeout(() => {
          navigate('/sign_in')
        }, 1500)
      } else {
        toast.error('Đặt sân thất bại - ' + res.data.message)
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <DetailsScreenWrapper>
      <ToastContainer 
        autoClose={2000}
        position="top-right" 
      />
      <Container>
        <DetailsContent className="grid">
          <ProductPreview previewImages={dataTurf?.images} />
          <ProductDetailsWrapper>
            <h2 className="prod-title">{dataTurf?.name}</h2>
            <p className="prod-title" style={{marginBottom: '10px'}}>Địa chỉ: {dataTurf?.address}</p>
            <div className="flex items-center rating-and-comments flex-wrap">
              <div className="prod-rating flex items-center">
                <Rating name="read-only" value={dataTurf?.rating | 0} readOnly />
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
                {dataTurf.prices.map((priceOption, index) => {
                  if (turfPriceId === priceOption.id) {
                    return (
                      <div className="frame-price" style={{backgroundColor: '#f2f3f5'}} key={index} onClick={() => setTurfPriceId(priceOption.id)}>
                        <p> <b> {priceOption.start_time} - {priceOption.end_time} </b> </p>
                        <span className="flex items-center justify-center font-medium text-outerspace">
                          {VNDFormating(priceOption.price)}
                        </span>
                      </div>
                    )
                  }
                  return (
                    <div className="frame-price" key={index} onClick={() => setTurfPriceId(priceOption.id)}>
                      <p> <b> {priceOption.start_time} - {priceOption.end_time} </b> </p>
                      <span className="flex items-center justify-center font-medium text-outerspace">
                        {VNDFormating(priceOption.price)}
                      </span>
                    </div>
                  )
                })}
              </div>
            </ProductSizeWrapper>
            <ProductSizeWrapper>
              <div className="prod-size-top flex items-center flex-wrap">
                <p className="text-lg font-semibold text-outerspace">
                  Ngày
                </p>
                <BasicDatePicker setValue={setValueDate}/>
              </div>
            </ProductSizeWrapper>
            <div className="btn-and-price flex items-center flex-wrap">
              <BaseButtonGreen
                className="prod-add-btn"
                onClick={handleBooking}
              >
                <span className="prod-add-btn-icon">
                  <i className="bi bi-cart2"></i>
                </span>
                <span className="prod-add-btn-text"> <b> Đặt </b></span>
              </BaseButtonGreen>
            </div>
            <ProductServices />
          </ProductDetailsWrapper>
        </DetailsContent>
        <ProductDescriptionTab turfLocation={turfLocation}/>
        <ProductSimilar />
      </Container>
    </DetailsScreenWrapper>
  );
};

export default ProductDetailsScreen;
