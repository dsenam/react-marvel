import styled from 'styled-components';

export const Container = styled.div``;

export const ListChars = styled.div`
  background-color: #fff;
  text-align: center;
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
    border: 1px solid #dcdcdc;
    margin: 30px;
    width: 200px;
    height: 350px;
    img {
      width: 100%;
      height: 300px;
    }
  }
`;
