import styled from 'styled-components';

export const StyleHeaderButton = styled.span`
  display: flex;
  background: transparent;
  border: 1px solid #1c3c50;
  text-decoration: none;
  padding: 0.5rem 1rem;
  color: #1c3c50;
  border-radius: 9999px;
  font-size: 1rem;
  font-weight: 700;

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
  `