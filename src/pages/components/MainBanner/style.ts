import styled from 'styled-components';

export const StyleMainBanner = styled.div`
  display: flex;
  background-color: #F0F8FF;
  width: 100%;
  height: 38rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  span {
    font-size: 1rem;
    font-weight: 700;
    border: 2px solid #2C83FB;
    color: #2C83FB;
    padding: 0.5rem 1.5rem;
    border-radius: 99px 99px 99px 36px;
  }
  h1 {
    font-size: 6rem;
    font-weight: 700;
    margin-top: -3rem;
    background-clip: text;
    position: relative;
    -webkit-background-clip: text;
    color: transparent;
    background-image: linear-gradient(-45deg, rgba(31,118,240,1) 62%, rgba(44,131,251,1) 100%);
  }
  img {
    position: absolute;
    left: 96%;
    top: 12%;
  }
  h2 {
    font-size: 3.25rem;
    font-weight: 400;
    color: #1c3c50;
  }
  p {
  font-size: 1.25rem;
  font-weight: 400;
  border-top: 1px solid #dfe2e5;
  padding: 1rem 2.5rem;
  color: #1c3c50;
  margin-top: -3rem;
}

`