import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Annoucement from "../components/Annoucement";
import Footer from "../components/Footer";
import styled from "styled-components";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { userRequest } from "../../requestMethods";
import { useNavigate } from "react-router-dom";

const STRIPE_PUBLIC_KEY =
  "pk_test_51NawKsSFVoXChR8HAhQnenj7fkTYf2v6RWi2C5gDvqqj2H1lTVcqJTt7iruKxM9jZEgN1X3SZDypuGDGysNYwgRS00nF1XX8rd";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 30px;
`;

const Top = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TopTexts = styled.div``;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;

const TopButton = styled.button`
  padding: 10px 12px;
  cursor: pointer;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 12px;
  border: ${(props) => (props.type === "filled" ? "none" : "2px solid black")};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => (props.type === "filled" ? "white" : "black")};
`;
const Title = styled.h1`
  text-align: center;
  font-weight: 400;
`;
const Bottom = styled.div`
  display: flex;
  padding: 20px 0;
`;

const Info = styled.div`
  flex: 5;
`;
const Summary = styled.div`
  flex: 2;
  border: 1px solid lightgray;
  height: max-content;
  padding: 20px;
  margin-left: 20px;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Product = styled.div`
  height: 30vh;
  display: flex;
  margin: 10px 0;
  border-bottom: 1px solid lightgray;
  align-items: center;
  justify-content: space-between;
  padding-right: 50px;
`;
const ProductDetails = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;
const Image = styled.img`
  width: 200px;
  max-height: 28vh;
  object-fit: contain;
`;
const ProductName = styled.div``;
const ProductId = styled.span``;
const ProductSize = styled.span``;
const ProductColor = styled.span`
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
`;
const PriceDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 15px;
  width: 150px;
`;
const Details = styled.div`
  height: 100%;
  word-break: break-all;
  max-width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  font-size: 17px;
  font-weight: 500;
  padding: 0 10px;
`;
const ProductCountContainer = styled.div`
  font-size: 20px;
`;
const Icon = styled.span``;
const Count = styled.span`
  margin: 5px;
`;
const Price = styled.div`
  font-size: 30px;
  font-weight: 500;
`;

const Heading = styled.h2`
  font-weight: 200;
  font-size: 40px;
`;
const CostDetails = styled.div`
  font-size: 17px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
`;
const TotalCost = styled.div`
  font-size: 25px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
`;
const Button = styled.button`
  border: none;
  background: black;
  color: white;
  width: 100%;
  padding: 10px 0;
  font-weight: 600;
`;

function Cart() {
  const items = useSelector((state) => state.cart);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  const onToken = (token) => {
    setToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/v1/checkout/payment",
          {
            tokenId: token,
            amount: items.total * 100,
          }
        );
        navigate("/success");
        console.log(res);
      } catch (err) {
        console.log(err.message);
      }
    };
    token && makeRequest();
  }, [token, navigate, items.price]);
  return (
    <Container>
      <Navbar />
      <Annoucement />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shoping Bag(2)</TopText>
            <TopText>Your Wishlist</TopText>
          </TopTexts>
          <TopButton type="filled">Checkout now</TopButton>
        </Top>
        <Bottom>
          <Info>
            {items.products?.map((item) => (
              <Product key={item.createdAt}>
                <ProductDetails>
                  <Image src={item.img} />
                  <Details>
                    <ProductName>
                      <span>Product Name: {item.title}</span>
                    </ProductName>
                    <ProductId>
                      <b>Id:</b>
                      {item._id}
                    </ProductId>
                    <ProductColor color={item.color} />
                    <ProductSize>
                      <b>Size: </b>
                      {item.size}
                    </ProductSize>
                  </Details>
                </ProductDetails>
                <PriceDetails>
                  <ProductCountContainer>
                    <Icon>
                      <AiOutlinePlus />
                    </Icon>
                    <Count>{item.quantity}</Count>
                    <Icon>
                      <AiOutlineMinus />
                    </Icon>
                  </ProductCountContainer>
                  <Price>$ {item.price}</Price>
                </PriceDetails>
              </Product>
            ))}
          </Info>
          <Summary>
            <Heading>ORDER SUMMARY</Heading>
            <CostDetails>
              <span>{items.total}</span>
              <span>$ 80</span>
            </CostDetails>
            <CostDetails>
              <span>Estimated Shipping</span>
              <span>$ 5.9</span>
            </CostDetails>
            <CostDetails>
              <span>Shipping Disocount</span>
              <span>$ -5.90</span>
            </CostDetails>
            <TotalCost>
              <span>Total</span>
              <span>{items.total}</span>
            </TotalCost>
            <StripeCheckout
              name="ramana store"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ1MEOl0lEd7LCAXd9kKpH9hwCTNzUpJLsBAb6wLx05g&s"
              billingAddress
              shippingAddress
              currency="USD"
              description="total amout is $40"
              amount={4000}
              token={onToken}
              stripeKey={STRIPE_PUBLIC_KEY}
            >
              <Button>Chekout</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
}

export default Cart;
