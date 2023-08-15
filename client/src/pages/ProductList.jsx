import Navbar from "../components/Navbar";
import Annoucement from "../components/Annoucement";
import { styled } from "styled-components";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import Products from "../components/Products";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-weight: 600;
  font-size: 20px;
  margin-right: 10px;
`;

const Select = styled.select`
  margin: 7px;
  padding: 5px;
`;

const Option = styled.option``;

function ProductList() {
  const location = useLocation();
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState("newest");
  const category = location.pathname.split("/")[2];

  const handleFilter = (e) => {
    const value = e.target.value;
    setFilter({ ...filter, [e.target.name]: value });
  };

  return (
    <Container>
      <Navbar />
      <Annoucement />
      <Title>{category}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Product</FilterText>
          <Select name="color" onChange={handleFilter}>
            <Option disabled>Color</Option>
            <Option>White</Option>
            <Option>Red</Option>
            <Option>navy blue</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
          </Select>
          <Select name="size" onChange={handleFilter}>
            <Option disabled>Size</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products: </FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Low To High</Option>
            <Option value="dsc">High To Low</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products category={category} sort={sort} filter={filter} />
      <NewsLetter />
      <Footer />
    </Container>
  );
}

export default ProductList;
