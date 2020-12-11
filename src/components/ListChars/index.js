/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { Container, Header } from './styles';
import logo from '../../assets/logo.png';

function ListChars({ chars }) {
  const [search, setSearch] = useState('');

  // Filtrar resultados
  const filteredChars = chars.results.filter((char) =>
    char.name.toLowerCase().includes(search.toLocaleLowerCase())
  );

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <Container>
        <Header>
          <img src={logo} alt="logo" />

          <form>
            <input
              type="text"
              placeholder="Digite um herói"
              onChange={handleChange}
            />
          </form>
        </Header>

        <h1>Personagens</h1>

        <ul>
          {filteredChars.map((char) => (
            <li key={char.id}>
              <img
                src={`${char.thumbnail.path}/portrait_xlarge.${char.thumbnail.extension}`}
                alt="Imagem"
              />
              <p>{char.name}</p>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}

export default ListChars;
