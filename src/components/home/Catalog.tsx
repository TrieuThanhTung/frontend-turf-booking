import React from "react";
import { Container, Section } from "../../styles/styles";
import { ProductType, TurfField } from "../../utils/commonType";
import Title from "../common/Title";
import ProductList from "../product/ProductList";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';

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
          <div style={{margin: '24px 8px', display: "flex", justifyContent: 'flex-end'}}>
            <div className="" style={{ width: '200px'}}>
              <FormControl variant='standard' fullWidth>
                <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={sort}
                  label="Sort"
                  // onChange={handleChangeSort}
                >
                  <MenuItem value={'price-asc'}>
                    <span><ArrowUpwardRoundedIcon /></span>
                    <span style={{ paddingLeft: '8px' }}>
                      Price ascending
                    </span>
                  </MenuItem>
                  <MenuItem value={'price-desc'}>
                    <span><ArrowDownwardRoundedIcon /></span>
                    <span style={{ paddingLeft: '8px' }}>
                      Price descending
                    </span>
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <ProductList products={products} turfs={turfs}/>
        </div>
      </Container>
    </Section>
  );
};

export default Catalog;
