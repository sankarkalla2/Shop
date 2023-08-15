import React from "react";
import { styled } from "styled-components";
import {
  AiOutlineInstagram,
  AiFillTwitterCircle,
  AiFillGithub,
  AiOutlineFacebook,
  AiOutlineMail
} from "react-icons/ai";

import { GrLocation, GrLocationPin } from 'react-icons/gr'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaCcPaypal, FaCcVisa, FaCcMastercard } from 'react-icons/fa6'
import { SiPaytm } from 'react-icons/si'

const Container = styled.div`
  display: flex;
  height: 25vh;
  padding: 30px;
  /* overflow: hidden; */
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 100%;
  
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: 600;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
`;

const Desc = styled.p``;

const Icon = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
`;

const Heading = styled.h2`
  font-weight: 700;
  margin: 20px 0;
`;

const UnorderedList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 10px;
  flex-direction: column;
  flex-wrap: wrap;
  height: 20vh;

  
`;

const List = styled.li`
  padding: 1px;
  flex-wrap: wrap;

  &:hover {
    transform: scale(1.11);
  }
`;

const Address = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

`

function Footer() {
  return (
    <Container>
      <Left>
        <Title>Sankar</Title>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iure
          eius, quasi ab dolor voluptatum. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Voluptates excepturi voluptate
          accusantium modi commodi suscipit.
        </Desc>
        <SocialIcons>
          <Icon style={{ backgroundColor: "#07346a" }}>
            <AiOutlineFacebook style={{ color: "#fff" }} />
          </Icon>
          <Icon style={{ backgroundColor: "#E73173" }}>
            <AiOutlineInstagram style={{ color: "#fff" }} />
          </Icon>
          <Icon>
            <AiFillTwitterCircle />
          </Icon>
          <Icon>
            <AiFillGithub />
          </Icon>
        </SocialIcons>
      </Left>
      <Center>
        <Heading>Useful Links</Heading>
        <UnorderedList>
          <List>
            <a href="#" style={{ color: "black", textDecoration: "none" }}>
              Home
            </a>
          </List>
          <List>
            <a href="#" style={{ color: "black", textDecoration: "none" }}>
              Man Fashion
            </a>
          </List>
          <List>
            <a href="#" style={{ color: "black", textDecoration: "none" }}>
              Accessories
            </a>
          </List>
          <List>
            <a href="#" style={{ color: "black", textDecoration: "none" }}>
              Order Tracking
            </a>
          </List>
          <List>
            <a href="#" style={{ color: "black", textDecoration: "none" }}>
              Wishlist
            </a>
          </List>
          <List>
            <a href="#" style={{ color: "black", textDecoration: "none" }}>
              Cart
            </a>
          </List>
          <List>
            <a href="#" style={{ color: "black", textDecoration: "none" }}>
              Woman Fashion
            </a>
          </List>
          <List>
            <a href="#" style={{ color: "black", textDecoration: "none" }}>
              My Account
            </a>
          </List>
          <List>
            <a href="#" style={{ color: "black", textDecoration: "none" }}>
              Terms
            </a>
          </List>
          <List>
            <a href="#" style={{ color: "black", textDecoration: "none" }}>
              For Children
            </a>
          </List>
        </UnorderedList>
      </Center>
      <Right>
        <Heading>Contact</Heading>
        <Address><GrLocation/>{"\t"}123 abbey road, Singanabandha 531162</Address>
        <Address><BsFillTelephoneFill/>  +917780679130</Address>
        <Address><AiOutlineMail/> contact@sankar</Address>
        <Address style={{display: 'flex', gap:'10px', fontSize:'20px'}}>
          <FaCcPaypal/> <FaCcVisa/> <FaCcMastercard/><SiPaytm/>
        </Address>
      </Right>
    </Container>
  );
}

export default Footer;
