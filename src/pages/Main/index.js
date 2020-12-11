import React, { useEffect, useState } from 'react';
import { Container, ListChars } from './styles';
import api from '../../services/api';

function Main() {
  const [chars, setChars] = useState([]);

  async function loadData() {
    try {
      const response = await api.get(
        `https://gateway.marvel.com:443/v1/public/characters?limit=10&apikey=f0b2694de242923d1277ccb44958db7c`
      );
      setChars(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Container>
        <ListChars>
          <h1>Personagens</h1>

          <ul>
            {chars.results.map((char) => (
              <li>
                <img
                  src={`${char.thumbnail.path}/portrait_xlarge.${char.thumbnail.extension}`}
                  alt="Imagem"
                />
                <article>
                  <p>{char.name}</p>
                </article>
              </li>
            ))}
          </ul>
        </ListChars>
      </Container>
    </>
  );
}

export default Main;
