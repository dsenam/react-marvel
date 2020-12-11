/* eslint-disable react/prop-types */
import React from 'react';

import { Container } from './styles';

function ListChars({ chars }) {
  return (
    <>
      <Container>
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
      </Container>
    </>
  );
}

export default ListChars;
