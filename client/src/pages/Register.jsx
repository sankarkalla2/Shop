import styled from 'styled-components'


const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div`
  width: 40%;
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
  flex: 1;
  min-width: 40%;
`
const Agreement = styled.span`
  font-size: 14px;
  margin: 10px 0;
`
const Button = styled.button`
  width: 40%;
  padding: 10px 20px;
  border: none;
  background-color: teal;
  font-size: 20px;
  cursor: pointer;
  color: white;
`


function Register() {
  return (
    <Container>
      <Wrapper>
      <Title>CREATE AN ACCOUNT</Title>
      <Form>
        <Input placeholder="name"/>
        <Input placeholder="last name"/>
        <Input placeholder="username"/>
        <Input placeholder="email"/>
        <Input placeholder="password"/>
        <Input placeholder="confirm password"/>
        <Agreement>
          By Creating account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
        </Agreement>
      </Form>
      <Button>Create</Button>
      </Wrapper>
    </Container>
  )
}

export default Register