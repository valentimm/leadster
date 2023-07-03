import styled from 'styled-components';

const StyleVideoContainer = styled.div`
  display: flex;
  padding: 5rem 30rem;
  flex-direction: column;
  
  header {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: center;
    border-bottom: 2px solid #dfe2e5;
    padding-bottom: 1rem;
    width: 100%;
    .buttons {
      display: flex;
      flex-direction: row;
      gap: 0.5rem;
    }
    .search {
      display: flex;
      flex-direction: row;
      gap: 0.5rem;
      align-items: center;
      
      p {
        font-weight: bold;
        color: #1c3c50;
      }
    }
  }
  main {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
  }
  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
    border-top: 2px solid #dfe2e5;
    padding-top: 1rem;
  }
`
export default StyleVideoContainer;