import styled from "styled-components";
import Hero from "../../components/home/Hero";
import Catalog from "../../components/home/Catalog";
import { mensCatalog } from "../../data/data";
import Feedback from "../../components/home/Feedback";
import TurfApi from "../../api/TurfApi";
import { TurfField } from "../../utils/commonType";
import { useEffect, useState } from "react";

const HomeScreenWrapper = styled.main``;

const HomeScreen = () => {
  const [data, setData] = useState<TurfField[]>([]);

  const getTurfs = async () => {
    try {
      const response = await TurfApi.getTurfs();
      if (response.status === 200) {
        setData(response.data.data.turfs);
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
    <HomeScreenWrapper>
      <Hero />
      <Catalog catalogTitle={"Sân bóng"} products={mensCatalog} turfs={data}/>
      <Feedback />
    </HomeScreenWrapper>
  );
};

export default HomeScreen;
