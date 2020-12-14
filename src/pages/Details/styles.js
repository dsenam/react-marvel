import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #fff;
  margin-top: 20px;

  img {
    height: 50%;
    width: 20%;
    border: 2px solid black;
    padding: 5px;
    margin-right: 15px;
    margin-top: 15px;
  }

  article {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 20px;

    h1 {
      font-size: 36px;
      margin-bottom: 8px;
    }

    h2 {
      font-size: 30px;
    }

    p {
      font-size: 20px;
      font-style: italic;
      margin-bottom: 20px;
    }

    ul {
      display: flex;
      flex-direction: column;
      height: 100%;
      flex-wrap: wrap;

      li {
        border: 1px solid #ed3020;
        padding: 8px;
        margin: 5px;
      }
    }
  }
`;

export const Loading = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #ed3020;
  justify-content: center;
  align-items: center;

  h1 {
    color: #fff;
    margin-right: 10px;
  }

  @keyframes gira {
    to {
      transform: rotate(360deg);
    }
  }

  svg {
    animation: gira 8s linear infinite;
    transform-origin: 43px 40px;
    color: white;
    font-size: 40px;
  }
`;
