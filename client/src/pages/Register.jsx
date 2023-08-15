import { useState } from "react";
import styled from "styled-components";
import { publicRequest, userRequest } from "../../requestMethods";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  background-color: aliceblue;
  padding: 17px;
`;
const Title = styled.h1`
  font-weight: 500;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0;
  width: 100%;
`;
const Input = styled.input`
  margin: 10px 10px 5px 0;
  padding: 8px 12px;
  flex: 1;
  min-width: 40%;
`;
const Agreement = styled.span`
  font-size: 14px;
  margin: 10px 0;
`;
const Button = styled.button`
  width: 40%;
  padding: 10px 20px;
  border: none;
  background-color: teal;
  font-size: 20px;
  cursor: pointer;
  color: white;

  &:disabled {
    cursor: not-allowed;
  }
`;

const Error = styled.div`
  color: red;
`;

function Register() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState();
  const [isFetching, setIsFetching] = useState(false);
  const [message, setMassage] = useState(null);
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();

    if (!password || !confirmPassword || !userName || !email) {
      setMassage("enter all credentials");
    } else {
      if (password !== confirmPassword) setMassage("enter correct password");
      else {
        try {
          setIsFetching(true);
          const res = await userRequest.post("/register", {
            password,
            userName,
            email,
          });
          setIsFetching(false);
          setMassage(null);
          navigate("/login");
        } catch (err) {
          console.log(err.message);
          setIsFetching(false);
          setMassage(err.message);
        }
      }
    }
  };
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={(e) => handleClick(e)}>
          <Input placeholder="name" required />
          <Input placeholder="last name" required />
          <Input
            placeholder="username"
            required={true}
            onChange={(e) => setUserName(e.target.value)}
          />
          <Input
            placeholder="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            placeholder="confirm password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Agreement>
            By Creating account, I consent to the processing of my personal data
            in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
        </Form>
        <Button onClick={handleClick} disabled={isFetching}>
          Create
        </Button>
        {message && <Error>{message}</Error>}
      </Wrapper>
    </Container>
  );
}

export default Register;
