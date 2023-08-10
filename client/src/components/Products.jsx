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
  // filter.color = "navy blue";

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
      console.log(products);
    };

    getProducts();
  }, [category]);

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) => {
          return Object.entries(filter).every(([key, value]) =>
            item[key].includes(value)
          );
        })
      );

    console.log(filteredProducts);
  }, [products, category, filter]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) => {
        return [...prev].sort((a, b) => a.createdAt - b.createdAt);
      });
    } else if (sort === "asc") {
      setFilteredProducts((prev) => {
        return [...prev].sort((a, b) => a.price - b.price);
      });
    } else {
      setFilteredProducts((prev) => {
        return [...prev].sort((a, b) => b.price - a.price);
      });
    }
  }, [sort]);
  return (
    <Container>
      {filteredProducts.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </Container>
  );
}

export default Products;
