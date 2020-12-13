import styled from 'styled-components';

export const SearchContainer = styled.div`
  background-color: #03bb85;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  svg {
    color: yellow;
    font-size: 100px;
    margin-bottom: 10px;
  }
  h1 {
    color: whitesmoke;
  }
  input {
    margin-bottom: 30px;
    margin-top: 20px;
    width: 300px;
    height: 50%;
    border-radius: 7px;
    ::placeholder {
      color: #dcdcdc;
      padding-left: 5px;
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
