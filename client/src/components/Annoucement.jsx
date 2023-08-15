import { styled } from "styled-components"

const Container = styled.div`
  height: 30px;
  background-color: yellow;
  display: flex;
  align-items: center;
  justify-content: center;
`

function Annoucement() {
  return (
    <Container>deal of the day! Up to 40% off on orders above $100</Container>
  )
}

export default Annoucement