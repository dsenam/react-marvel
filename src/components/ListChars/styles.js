import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;

  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  h1 {
    margin-top: 15px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
    border-radius: 5px;
    border: 3px solid black;
    margin: 30px;
    width: 200px;
    height: 345px;

    img {
      width: 100%;
      height: 300px;
    }

    p {
      font-weight: bold;
      margin-top: 8px;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 200px;
  background-color: #ed3020;
  padding: 20px;

  img {
    width: 150px;
    height: 60px;
  }

  form {
    input {
      height: 40px;
      width: 350px;
      border-radius: 5px;
      padding: 10px;

      ::placeholder {
        color: #dcdcdc;
      }
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  button {
    background: none;
  }

  p {
    font-size: 16px;
  }
`;
