import React from 'react'
import { styled } from 'styled-components'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { mobile } from '../../responsive'


const Container = styled.div`
  height: 60px;
  
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 15px;
  margin-left: 20px;
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`

const Logo = styled.h1`
  
`

const Language = styled.div``

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: .5px solid lightgray;
  padding: 5px;
`

const Input = styled.input`
  border: none;
  outline: none;
`

const MenuItem = styled.div` 
  display: flex;
`
function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>En</Language>
          <SearchContainer>
            <Input/>
            <AiOutlineSearch style={{color: 'gray', fontSize:'small'}}/>
            </SearchContainer>
        </Left>
        <Center><Logo>Sankar</Logo></Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem> Login </MenuItem>
          <MenuItem>
            <AiOutlineShoppingCart/>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar