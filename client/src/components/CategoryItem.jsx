import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.div`
  flex: 1;
  height: 70vh;
  margin: 5px;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: white;
  margin: 20px;
  font-weight: 700;
`;

const Button = styled.button`
  border: none;
  padding: 5px;
  background: white;
  cursor: pointer;
  font-weight: 500;
`;
function CategoryItem({ item }) {
  return (
    <Container>
      <Link to={`products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
}

export default CategoryItem;
