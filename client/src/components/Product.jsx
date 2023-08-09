import styled from 'styled-components'
import { AiOutlineShoppingCart, AiOutlineSearch, AiOutlineHeart } from 'react-icons/ai'

const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: gray;
  background-color: rgba(0, 0, 0, .2);
  transition: all .5s ease;
  opacity: 0;

`

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 250px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: aliceblue;
  padding: 20px;
  position: relative;


  &:hover ${Info} {
    opacity: 1;
  }
`

const Circle = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background-color: white;
  opacity: .4;
  position: absolute;
`

const Image = styled.img`
  height: 75%;
  object-fit: contain;
  z-index: 2;
`

const Icon = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  cursor: pointer;
  transition: all .5s ease;

  &:hover {
    transform: scale(1.1);
    background-color: #e9f5f5;
  }
`

function Product({ item }) {
  return (
    <Container>
      <Circle/>
      <Image src={item.img}/>
      <Info>
        <Icon><AiOutlineShoppingCart/></Icon>
        <Icon><AiOutlineSearch/></Icon>
        <Icon><AiOutlineHeart></AiOutlineHeart></Icon>
      </Info>
    </Container>
  )
}

export default Product