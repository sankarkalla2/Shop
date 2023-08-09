import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Annoucement from '../components/Annoucement'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import { AiOutlinePlusCircle, AiOutlineMinusCircle} from 'react-icons/ai'

const Container = styled.div`
  
`

const Wrapper = styled.div`
  display: flex;
  padding: 50px;
`

const ImageContainer = styled.div`
  flex: 1;
  padding: 0 50px;
`

const InfoContainer = styled.div`
  flex: 1;
`

const Image = styled.img`
  width: 100%;
  height: 80vh;
`
const Title = styled.h1`
  font-weight: 400;
`

const Desc = styled.p`
  margin: 20px 0;
  
`

const Price = styled.span`
  font-size: 40px;
  font-weight: 500;
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
`

const Filter = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`

const FilterTitle = styled.span`
  font-size: 17px;
  font-weight: 500;
`

const FilterColor =styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin: 0 3px;
`

const FilterSize = styled.select`
  padding: 5px;
  font-size: 15px;
  margin-left: 5px;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  margin: 30px 0;
`
const AddAmountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 22px;
`
const Amount = styled.span`
  border: 1px solid teal;
  padding: 3px 12px;
  border-radius: 10px;
`
const Button = styled.button`
  border: 2px solid teal;
  background-color: transparent;
  padding: 10px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    color: gray;
  }
`
function Product() {
  return (
    <Container>
      <Navbar/>
      <Annoucement/>
      <Wrapper>
        <ImageContainer>
          <Image src="https://i.ibb.co/cXFnLLV/3.png"/>
        </ImageContainer>
        <InfoContainer>
          <Title>Denim Jacket</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta reiciendis vitae eum architecto neque hic velit soluta ex explicabo minus!
            </Desc>
            <Price>$ 25</Price>

            <FilterContainer>
              <Filter>
                <FilterTitle>Color</FilterTitle>
                <FilterColor color='black'></FilterColor>
                <FilterColor color='darkblue'></FilterColor>
                <FilterColor color='gray'></FilterColor>
              </Filter>
              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize>
                  <FilterSizeOption>S</FilterSizeOption>
                  <FilterSizeOption>M</FilterSizeOption>
                  <FilterSizeOption>L</FilterSizeOption>
                  <FilterSizeOption>XL</FilterSizeOption>
                  <FilterSizeOption>XXL</FilterSizeOption>
                </FilterSize>
          </Filter>
          </FilterContainer>
          <AddContainer>
            <AddAmountContainer>
              <AiOutlineMinusCircle/>
              <Amount>1</Amount>
              <AiOutlinePlusCircle/>
            </AddAmountContainer>
            <Button>Add To Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter/>
      <Footer/>
    </Container>
  )
}

export default Product