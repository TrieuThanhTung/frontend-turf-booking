import styled from "styled-components";
import Hero from "../../components/home/Hero";
import Catalog from "../../components/home/Catalog";
import { mensCatalog } from "../../data/data";
import Feedback from "../../components/home/Feedback";

const HomeScreenWrapper = styled.main``;

const HomeScreen = () => {
  return (
    <HomeScreenWrapper>
      <Hero />
      <Catalog catalogTitle={"Sân bóng"} products={mensCatalog} />
      <Feedback />
    </HomeScreenWrapper>
  );
};

export default HomeScreen;
