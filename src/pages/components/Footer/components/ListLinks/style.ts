import styled from 'styled-components';

const StyleListLinks = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 0.5rem;

      a {
        color: #1c3c50;
        text-decoration: none;
        font-size: 1rem;

        &:hover {
          color: #007dff;
        }
      }
    }
  }
`
export default StyleListLinks;