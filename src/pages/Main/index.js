import React from 'react';
import { Container, ListChars } from './styles';

function Main() {
  return (
    <>
      <Container>
        <ListChars>
          <h1>Personagens</h1>

          <ul>
            <li>
              <img
                src="https://scontent.fcgh3-1.fna.fbcdn.net/v/l/t1.0-9/13516570_1134741859901042_1443622375463448550_n.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_ohc=Y4XzBG0Epr8AX9RmCGi&_nc_ht=scontent.fcgh3-1.fna&oh=b10cdb01867d9cf370db104ff5067b0f&oe=5FF866C4"
                alt="Imagem"
              />
              <article>
                <p>Douglas Sena</p>
                <span>Super Herói</span>
              </article>
            </li>
          </ul>
        </ListChars>
      </Container>
    </>
  );
}

export default Main;
