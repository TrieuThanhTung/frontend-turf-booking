import styled from "styled-components";
import Hero from "../../components/home/Hero";
import Catalog from "../../components/home/Catalog";
import { mensCatalog } from "../../data/data";
import Feedback from "../../components/home/Feedback";
import TurfApi from "../../api/TurfApi";
import { TurfField } from "../../utils/commonType";
import { useEffect, useState } from "react";
import Pagination from '@mui/material/Pagination';
import { useNavigate, useSearchParams } from "react-router-dom";


const HomeScreenWrapper = styled.main``;

const HomeScreen = () => {
  window.scrollTo(0, 0)
  const [searchParams] = useSearchParams();
  const navigate = useNavigate()
  const [data, setData] = useState<TurfField[]>([]);

  const getTurfs = async (page?: string) => {
    try {
      const response = await TurfApi.getTurfs(page);
      if (response.status === 200) {
        setData(response.data.data.turfs);
        setPage({
          current: response.data.data.currentPage,
          total: response.data.data.totalPages
        })
      }
      console.log("data", response.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const page = searchParams.get('page') || undefined
    getTurfs(page);
  }, [searchParams])

  const [page, setPage] = useState({
    current: 1,
    total: 1
  });

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage({
      ...page,
      current: value,
    });
    const newUrlParams = new URLSearchParams(searchParams);
    newUrlParams.set('page', value.toString());
    navigate(`?${newUrlParams.toString()}`)
  };

  return (
    <HomeScreenWrapper>
      <Hero />
      <Catalog catalogTitle={"Sân bóng"} products={mensCatalog} turfs={data} />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination count={page.total} page={page.current} onChange={handleChange} variant="outlined" shape="rounded" />
      </div>
      <Feedback />
    </HomeScreenWrapper>
  );
};

export default HomeScreen;
