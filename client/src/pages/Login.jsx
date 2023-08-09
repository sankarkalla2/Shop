import React from 'react'
import { styled } from 'styled-components'


const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div`
  width: 20%;
  background-color: aliceblue;
  padding: 17px;
`
const Title = styled.h1`
  font-weight: 500;
`
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0;
  width: 100%;
`
const Input = styled.input`
  margin: 10px 10px 5px 0;
  padding: 8px 12px;
  width: 100%;
`
const Button = styled.button`
  width: 40%;
  padding: 10px 20px;
  border: none;
  background-color: teal;
  cursor: pointer;
  color: white;
  margin: 7px 0;
`

const Link = styled.a`
  text-decoration: underline;
  margin-bottom: 5px;
  display: block;
`

function Login() {
  return (
    <Container>
      <Wrapper>
      <Title>LOG IN</Title>
      <Form>
        <Input placeholder="username"/>
        <Input placeholder="password"/>
      </Form>
      <Button>Submit</Button>
      <Link>Do not you remember your password</Link>
      <Link>CREATE  A NEW ACCOUNT</Link>
      </Wrapper>
    </Container>
  )
}

export default Login