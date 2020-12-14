/* eslint-disable react/prop-types */
import React from 'react';
import { IoCaretForward, IoCaretBack } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { Container, Actions, Form } from './styles';

function ListChars({ chars, prevPage, nextPage, page, handleChange, search }) {
  return (
    <>
      <Container>
        <h1>Personagens</h1>

        <Form>
          <input
            type="text"
            placeholder="Digite um herói"
            onChange={handleChange}
            value={search}
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
          />
        </Form>

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
          {chars.results.map((char) => (
            <li key={char.id}>
              <img
                src={`${char.thumbnail.path}/portrait_xlarge.${char.thumbnail.extension}`}
                alt="Imagem"
              />
              <article>
                <p>{char.name}</p>
                <Link to={`/details/${char.id}`}>
                  <button type="button">Detalhes +</button>
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}

export default ListChars;
