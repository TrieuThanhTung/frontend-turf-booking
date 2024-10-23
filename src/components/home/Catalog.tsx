import React from "react";
import { Container, Section } from "../../styles/styles";
import { ProductType, TurfField } from "../../utils/commonType";
import Title from "../common/Title";
import ProductList from "../product/ProductList";

type CatalogProps = {
  catalogTitle: string
  products: ProductType[]
  turfs: TurfField[]
}

const Catalog:React.FC<CatalogProps> = ({ catalogTitle, products, turfs }) => {
  return (
    <Section>
      <Container>
        <div className="categories-content">
          <Title titleText={catalogTitle} />
          <ProductList products={products} turfs={turfs}/>
        </div>
      </Container>
    </Section>
  );
};

export default Catalog;
