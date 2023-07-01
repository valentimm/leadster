import styled from "styled-components";

const StyleFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 28rem;


  .logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 15rem;
      height: auto;
      display: block;
      margin: 0 auto;
    }
    p {
      font-size: 0.85rem;
      color: #1c3c50;
      margin-left: 0.5rem;
      margin-top: 0.25rem;
      display: flex;
      align-items: center;
    }
  }
  
  .bottomLinks {
    display: flex;
    flex-direction: row;
    gap: 4rem;
    h1 {
      font-size: 0.85rem;
      color: #1c3c50;
      margin-bottom: 1rem;
      margin-top: 2rem;
    } 
  }
  .links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .icons {
    display: flex;
    flex-direction: row;
  }
  .additionalInfos {
    display: grid;
    padding-top: 1rem;
    grid-template-columns: 1fr 1fr; 
    font-size: 0.85rem;
    color: #1c3c50;
    p {
      margin: 0;
    }
    a {
      margin-left: -3.5rem;
    }
  }

  .copyright {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    border-top: 1px solid #ccc;
    margin-top: 1rem;
    padding-top: 1rem;
    font-size: 0.85rem;
    color: #1c3c50;

    a{
      text-decoration: none;
      color: #007dff;
    }
  }
`
export default StyleFooter;