import React from 'react'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Annoucement from '../components/Annoucement'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const Container = styled.div``

const Wrapper = styled.div`
  padding: 30px;
`

const Top = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const TopTexts = styled.div`
  
`

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
`

const TopButton = styled.button`
  padding: 10px 12px;
  cursor: pointer;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 12px;
  border: ${props => props.type === 'filled'? "none": "2px solid black"};
  background-color: ${props => props.type === 'filled'? "black": "transparent"};
  color: ${props => props.type === 'filled'? "white": "black"};
`
const Title = styled.h1`
  text-align: center;
  font-weight: 400;
`
const Bottom = styled.div`
  display: flex;
  padding: 20px 0;
`

const Info = styled.div`
  flex: 5;
`
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
`

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
`
const Image = styled.img`
  width: 50%;
  max-height: 28vh;
  object-fit: cover;
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductSize = styled.span``
const ProductColor = styled.span`
  width: 20px;
  height: 20px;
  background-color: ${props => props.color};
  border-radius: 50%;
`
const PriceDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 15px;
`
const Details = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  font-size: 17px;
  font-weight: 500;
  padding: 0 10px;
`
const ProductCountContainer = styled.div`
  font-size: 20px;
`
const Icon = styled.span``
const Count = styled.span`
  margin: 5px;
`
const Price = styled.div`
  font-size: 30px;
  font-weight: 500;
`


const Heading = styled.h2`
  font-weight: 200;
  font-size: 40px;
`
const CostDetails = styled.div`
  font-size: 17px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
`
const TotalCost = styled.div`
  font-size: 25px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
`
const Button = styled.button`
  border: none;
  background: black;
  color: white;
  width: 100%;
  padding: 10px 0;
  font-weight: 600;
`


function Cart() {
  return (
    <Container>
      <Navbar/>
      <Annoucement/>
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shoping Bag(2)</TopText>
            <TopText>Your Wishlist</TopText>
          </TopTexts>
          <TopButton type='filled'>Checkout now</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetails>
                <Image src='https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png'/>
                <Details>
                  <ProductName><b>Product Name: </b>Levis T shirt </ProductName>
                  <ProductId><b>Id:</b>292983883</ProductId>
                  <ProductColor color='gray'/>
                  <ProductSize><b>Size: </b>25.2</ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <ProductCountContainer>
                  <Icon>
                    <AiOutlinePlus/>
                  </Icon>
                  <Count>2</Count>
                  <Icon>
                    <AiOutlineMinus/>
                  </Icon>
                </ProductCountContainer>
                <Price>$ 30</Price>
              </PriceDetails>
            </Product>
            <Product>
              <ProductDetails>
                <Image src='https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png'/>
                <Details>
                  <ProductName><b>Product Name: </b>Levis T shirt </ProductName>
                  <ProductId><b>Id:</b>292983883</ProductId>
                  <ProductColor color='gray'/>
                  <ProductSize><b>Size: </b>25.2</ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <ProductCountContainer>
                  <Icon>
                    <AiOutlinePlus/>
                  </Icon>
                  <Count>2</Count>
                  <Icon>
                    <AiOutlineMinus/>
                  </Icon>
                </ProductCountContainer>
                <Price>$ 30</Price>
              </PriceDetails>
            </Product>
          </Info>
          <Summary>
            <Heading>ORDER SUMMARY</Heading>
            <CostDetails>
              <span>Subtotal</span>
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
              <span>$ 80</span>
            </TotalCost>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <NewsLetter/>
      <Footer/>
    </Container>
  )
}

export default Cart
