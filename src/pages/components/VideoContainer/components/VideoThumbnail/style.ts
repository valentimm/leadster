import styled from 'styled-components';

const StyleVideoThumbnail = styled.div`
  position: relative;
  width: 18rem;
  height: 16rem;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 2px 5px 10px gray;
  margin: 1rem 0;
  img {
    width: 100%;
  }
  p {
    position: absolute;
    top: 3rem;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.5rem;
    z-index: 2;
  }
  &:hover {
    cursor: pointer;
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      background-color: rgba(44, 131, 251, 0.5);
      z-index: 1;
    }
    img {
      position: relative;
      z-index: -1;
    }
    p {
      color: #1f76f0;
    }
    &::before {
      content: "";
      position: absolute;
      top: 28%;
      left: 43%;
      rotate: 90deg;
      border-left: 1.2rem solid transparent;
      border-right: 1.2rem solid transparent;
      border-bottom: 2rem solid white;
      z-index: 3;
    }
  }

  
`;
export default StyleVideoThumbnail;