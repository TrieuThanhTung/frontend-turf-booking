import styled from "styled-components";
import { HeaderMainWrapper, SiteBrandWrapper } from "../../styles/header";
import { Container } from "../../styles/styles";
import { staticImages } from "../../utils/images";
import { Link, useLocation } from "react-router-dom";
import { Input, InputGroupWrapper } from "../../styles/form";
import { breakpoints, defaultTheme } from "../../styles/themes/default";
import { debounce } from "@mui/material";
import React, { useCallback, useEffect } from "react";
import { TurfField } from "../../utils/commonType";
import { titleProduct } from "../../utils/helper";
import TurfApi from "../../api/TurfApi";

const NavigationAndSearchWrapper = styled.div`
  column-gap: 20px;
  .search-form {
    position: relative;
    @media (max-width: ${breakpoints.lg}) {
      width: 100%;
      max-width: 500px;
    }
    @media (max-width: ${breakpoints.sm}) {
      display: none;
    }
  }

  .input-group {
    min-width: 320px;

    .input-control {
      @media (max-width: ${breakpoints.sm}) {
        display: none;
      }
    }

    @media (max-width: ${breakpoints.xl}) {
      min-width: 160px;
    }

    @media (max-width: ${breakpoints.sm}) {
      min-width: auto;
      grid-template-columns: 100%;
    }
  }

  @media (max-width: ${breakpoints.lg}) {
    width: 100%;
    justify-content: flex-end;
  }
`;

const IconLinksWrapper = styled.div`
  column-gap: 18px;
  .icon-link {
    width: 36px;
    height: 36px;
    border-radius: 6px;

    &.active {
      background-color: ${defaultTheme.color_sea_green};
      img {
        filter: brightness(100);
      }
    }

    &:hover {
      background-color: ${defaultTheme.color_whitesmoke};
    }
  }

  @media (max-width: ${breakpoints.xl}) {
    column-gap: 8px;
  }

  @media (max-width: ${breakpoints.xl}) {
    column-gap: 6px;
  }
`;

const SelectProducts = styled.div`
  position: absolute;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
  max-height: 280px;
  width: 100%;
  border-radius: 4px;
  margin-top: 8px;
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

  .product-d-item {
    display: flex;
    padding: 12px 0;
    border-bottom: 1px solid ${defaultTheme.color_whitesmoke};
    position: relative;

    @media (max-width: ${breakpoints.xl}) {
      grid-template-columns: 80px 3fr 2fr 32px;
      padding: 16px 0;
      gap: 16px;
    }

    @media (max-width: ${breakpoints.sm}) {
      grid-template-columns: 50px 3fr 2fr;
      gap: 16px;
    }

    @media (max-width: ${breakpoints.xs}) {
      grid-template-columns: 100%;
      gap: 12px;
    }

    &:first-child {
      padding-top: 0;
    }

    &:last-child {
      padding-bottom: 0;
      border-bottom: 0;
    }

    &-img {
      width: 50px;
      height: 50px;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

      @media (max-width: ${breakpoints.sm}) {
        width: 50px;
        height: 50px;
      }

      @media (max-width: ${breakpoints.sm}) {
        width: 100%;
        height: 100%;
      }
    }

    &-title {
      padding-left: 16px;
    }
    
    .display-none {
      display: none;
    }
`


const Header = () => {
  const location = useLocation();

  const [searchData, setSearchData] = React.useState('')
  const handleSearchProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData(e.target.value)
    debounceSearchProduct(e.target.value)
  }

  const [turfs, setTurfs] = React.useState<Array<TurfField>>([])

  useEffect(() => {
    setTurfs([])
    setSearchData('')
  }, [location])

  const debounceSearchProduct = useCallback(
    debounce(async (query?: string) => {
      try {
        const response = await TurfApi.searchTurfs(query);
        if (response?.status === 200) {
          setTurfs(response?.data.data.turfs)
        }
        console.log(response?.data.data)
      } catch (error) {
        console.log(error)
      }
    }, 500)
    , [])

  const SearchProduct = () => {
    if (!turfs) return
    if(searchData !== '' && turfs.length === 0) {
      return (
        <SelectProducts>
          Không tìm thấy sân bóng nào phù hợp.
        </SelectProducts>
      )
    }

    if (searchData !== '' && turfs.length !== 0) {
      return (
        <SelectProducts>
          {turfs.map((turf, index) => {
            return (
              <div className="product-d-item" key={index}>
                <div className="product-d-item-img">
                  <img
                    src={turf.images[0]?.url || staticImages.ground_football}
                    alt="turf's image"
                    className="object-fit-cover"
                  />
                </div>
                <div className="product-d-item-title" style={{ flex: 1 }}>
                  <Link to={`/turf/${turf.id}`}><p className="text-xl font-bold">{titleProduct(turf.name)}</p></Link>
                </div>
              </div>
            )
          })
          }
        </SelectProducts>
      )
    }
  }


  return (
    <HeaderMainWrapper className="header flex items-center">
      <Container className="container">
        <div className="header-wrap flex items-center justify-between">
          <div className="flex items-center">
            <button
              type="button"
              className="sidebar-toggler"
            >
              <i className="bi bi-list"></i>
            </button>
            <SiteBrandWrapper to="/" className="inline-flex">
              <div className="brand-img-wrap flex items-center justify-center">
                <img
                  className="site-brand-img"
                  src={staticImages.football_logo}
                  alt="site logo"
                />
              </div>
              <span className="site-brand-text text-outerspace">Turf</span>
            </SiteBrandWrapper>
          </div>
          <NavigationAndSearchWrapper className="flex items-center">
            <form className="search-form" >
              <InputGroupWrapper className="input-group">
                <span className="input-icon flex items-center justify-center text-xl text-gray">
                  <i className="bi bi-search"></i>
                </span>
                <Input
                  type="text"
                  className="input-control w-full"
                  placeholder="Tìm kiếm ..."
                  onChange={handleSearchProduct}
                />
              </InputGroupWrapper>
              <SearchProduct />
            </form>
          </NavigationAndSearchWrapper>

          <IconLinksWrapper className="flex items-center">
            <Link
              to="/account"
              className={`icon-link ${
                location.pathname === "/account" ||
                location.pathname === "/account/add"
                  ? "active"
                  : ""
              } inline-flex items-center justify-center`}
            >
              <img src={staticImages.user} alt="" />
            </Link>
          </IconLinksWrapper>
        </div>
      </Container>
    </HeaderMainWrapper>
  );
};

export default Header;
