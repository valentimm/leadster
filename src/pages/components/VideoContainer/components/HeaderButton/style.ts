import styled from 'styled-components';

const StyleHeaderButton = styled.div`
button{
    font-size: 1rem;
    background-color: transparent;
    border-radius: 9999px;
    color: #1c3c50;
    padding: 0.5rem 1rem;
    border: 1px solid #1c3c50;
    font-weight: 700;
    text-decoration: none;

    &:hover {
      border: 1px solid #2C83FB;
      color: #2C83FB;
      cursor: pointer;
    }

    &:active {
      border: 1px solid #2C83FB;
      color: #ffffff;
      background-color: #2C83FB;
    }
}
`
export default StyleHeaderButton;