import React from "react";
import { Section } from "../../styles/styles";
import Title from "../common/Title";
import ProductList from "./ProductList";
import { TurfField } from "../../utils/commonType";
import TurfApi from "../../api/TurfApi";

const ProductSimilar = () => {
  const [data, setData] = React.useState<TurfField[]>([]);

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

  React.useEffect(() => {
    getTurfs();
  }, [])

  return (
    <Section>
      <Title titleText={"Similar Products"} />
      <ProductList turfs={data} />
    </Section>
  );
};

export default ProductSimilar;
