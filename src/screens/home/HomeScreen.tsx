import styled from "styled-components";
import Hero from "../../components/home/Hero";
import Featured from "../../components/home/Featured";
// import Catalog from "../../components/home/Catalog";
// import { mensCatalog } from "../../data/data";
import Feedback from "../../components/home/Feedback";

const HomeScreenWrapper = styled.main``;

const HomeScreen = () => {
  return (
    <HomeScreenWrapper>
      <Hero />
      <Featured />
      {/* <Catalog catalogTitle={"Categories For Men"} products={mensCatalog} /> */}
      <Feedback />
    </HomeScreenWrapper>
  );
};

export default HomeScreen;
