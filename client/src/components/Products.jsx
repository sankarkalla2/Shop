import styled from "styled-components";
import { popularProducts } from "../../data";
import Product from "./Product";
import axios from "axios";
import { useEffect, useState } from "react";

const Container = styled.div`
  display: flex;
  margin: 5px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

function Products({ category, sort, filter }) {
  console.log(category);
  console.log(sort);
  console.log(filter);

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(
        category
          ? `http://localhost:5000/api/v1/products?category=${category}`
          : "http://localhost:5000/api/v1/products"
      );

      setProducts(res.data);
    };

    getProducts();
  }, [category]);

  useEffect(() => {
    filter &&
      setFilteredProducts(
        Object.entries(products).filter((item) => {
          if (filter.color && filter.size)
            return item.color === filter.color && item.size === filter.size;
          else if (filter.color) return item.color === filter.color;
          return image.size === filter.size;
        })
      );
  }, [filter, sort]);
  return (
    <Container>
      {products.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </Container>
  );
}

export default Products;
