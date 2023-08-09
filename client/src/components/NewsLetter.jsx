import styled from "styled-components"
import { AiOutlineSend } from 'react-icons/ai'
import { mobile } from "../../responsive"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  gap: 40px;
  background-color: #ebd6d6;

  ${mobile({display: 'none'})}
`

const Title = styled.h1`
  font-size: 70px;
  font-weight: 700;
`

const Desc = styled.div`
  font-size: 25px;
  font-weight: 500;
`

const InputContainer = styled.div`
  width: 40%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: none;
  height: 30px;
`

const Input = styled.input`
  flex: 8;
  outline: none;
  padding-left: 20px;
  border: none;
`

const Button = styled.button`
  flex: 1;
  background: none;
  border: none;
  background-color: teal;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`


function NewsLetter() {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get times updates on your favourite products</Desc>
      <InputContainer>
        <Input placeholder="enter your email..."/>
        <Button>
          <AiOutlineSend/>
        </Button>
      </InputContainer>
    </Container>
  )
}

export default NewsLetter