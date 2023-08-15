import React, { useState } from 'react'
import { styled } from 'styled-components'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'
import { sliderItems } from '../../data'

const Container = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
`

const Arrow = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${props => props.direction && props.direction === 'left' && '10px'};
  right: ${props => props.direction && props.direction === 'right' && '10px'};
  cursor: pointer;
  z-index: 999;
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translate(${props=> props.slideindex * -100}vw);
`

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${props => props.bg};
`

const ImageContainer = styled.div`
  height: 100%;
  width: 100vw;
  flex: 1;
  
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  
`

const Image = styled.img`
  height: 80%;
  padding-left: 50px;
`

const Title = styled.h1`
  font-size: 65px;
`

const Desc = styled.p`
  font-size: 20px;
  margin: 20px 0;
  letter-spacing: 3px;
  font-weight: 500;
`

const Button = styled.button`
  background-color: transparent;
  padding: 5px 10px;
  cursor: pointer;
`

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0)

  const handleClick = (direction) => {
    if(direction === 'left') {
      setSlideIndex(slideIndex > 0? slideIndex - 1: 2)
    } else {
      setSlideIndex(slideIndex < 2? slideIndex + 1: 0)
    }
  }
  return (
    <Container>
      <Arrow direction='left' onClick={() => handleClick('left')}>
        <BiLeftArrow/>
      </Arrow>
      <Wrapper slideindex={slideIndex}>
        {
          sliderItems.map((item) => (
            <Slide bg={item.bg}>
            <ImageContainer>
              <Image src={item.img}/>
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>EXPLORE</Button>
            </InfoContainer>
          </Slide>
          ))
        }
        
      </Wrapper>
      <Arrow direction='right' onClick={() => handleClick('right')}>
      <BiRightArrow/>
      </Arrow>
    </Container>
  )
}

export default Slider