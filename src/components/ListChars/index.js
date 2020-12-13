/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { IoCaretForward, IoCaretBack } from 'react-icons/io5';
import { Container, Header, Actions } from './styles';
import logo from '../../assets/logo.png';

function ListChars({ chars, prevPage, nextPage, page }) {
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

        <Actions>
          <button type="button" onClick={prevPage}>
            <IoCaretBack size={32} color="red" />
          </button>
          <p>Página {page + 1}</p>
          <button type="button" onClick={nextPage}>
            <IoCaretForward size={32} color="red" />
          </button>
        </Actions>

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
