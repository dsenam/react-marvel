import styled from 'styled-components';

export const Container = styled.div`
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
