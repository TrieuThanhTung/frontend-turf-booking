import React from "react";
import { Container, Section } from "../../styles/styles";
import { ProductType } from "../../utils/commonType";
import Title from "../common/Title";
import ProductList from "../product/ProductList";

type CatalogProps = {
  catalogTitle: string
  products: ProductType[]
}

const Catalog:React.FC<CatalogProps> = ({ catalogTitle, products }) => {
  return (
    <Section>
      <Container>
        <div className="categories-content">
          <Title titleText={catalogTitle} />
          <ProductList products={products} />
        </div>
      </Container>
    </Section>
  );
};

export default Catalog;
