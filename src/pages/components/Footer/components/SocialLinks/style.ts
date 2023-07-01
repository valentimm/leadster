import styled from "styled-components";

const StyleSocialLink = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: #f7f8fb;
  margin: 0 0.5rem;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  img {
    width: 1.5rem;
    height: 1.5rem;
  }
  &:hover {
    background-color: #00aff0;
    img {
      filter: brightness(2)
    }
  }
`

export default StyleSocialLink;