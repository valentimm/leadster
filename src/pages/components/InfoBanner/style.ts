import styled from 'styled-components';

const StyleInfoBanner = styled.div`
  display: flex;
  background-color: #F0F8FF;
  background-image: radial-gradient(circle at bottom, transparent 40%, #e6f3ff 40%, #e6f3ff 50%, transparent 50%);
  height: 30rem;
  justify-content: center;
  align-items: center;
  img {
    width: 30rem;
  }
  .container {
    width: 31rem;
    margin-top: -2rem;
    margin-left: 6rem;
  h1 {
    font-size: 2.25rem;
    font-weight: 400;
    color: #1c3c50;
  }
  p {
    font-size: 1.25rem;
    color: #1c3c50;
    margin-top: -1rem;
  }}
.informationCard {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
.infos {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid #dfe2e5;
  padding-top: 1rem;
  padding-right: 5rem;
  button{
    width: 14rem;
    font-size: 0.85rem;
    background-color: #2C83FB;
    border-radius: 9999px;
    color: #fff;
    padding: 1.25rem 1.5rem;
    border: none;
    font-weight: 700;
    cursor: pointer;
    align-items: center;
    transition: all 0.2s ease-in-out;

    :hover {
      scale: 1.1;
      text-decoration: underline;
    }
    }
  img {
    width: 10rem;
    margin-left: rem;
  }
}
.cardRating {
  display: flex;
  flex-wrap: wrap;
}

.cardRating .paymentInfo {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-top: 1rem;
}

.cardRating .paymentInfo p {
  font-size: 0.85rem;
  font-weight: 500;
  line-height: 1.5rem;
  margin: 0;
}

.cardRating .paymentInfo img {
  width: 1rem;
  height: auto;
  padding-right: 0.5rem;
}

.cardRating .paymentInfo .rating {
  display: flex;
  align-items: center;
  justify-content: center;

}

.cardRating .paymentInfo .rating img {
  width: 4rem;
  height: 0.85rem;
}
.cardRating .paymentInfo .rating p {
  font-size: 0.85rem;
  font-weight: 500;
}

}
`
export default StyleInfoBanner;