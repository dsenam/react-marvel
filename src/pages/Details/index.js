/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import api from '../../services/api';

import { Container, Loading } from './styles';

function Details({ match }) {
  const [loading, setLoading] = useState(true);
  const [char, setChar] = useState([]);
  const [charId, setCharId] = useState('');

  // Requisição API
  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        setCharId(match.params.id);
        const response = await api.get(
          `/v1/public/characters/${charId}?apikey=f0b2694de242923d1277ccb44958db7c`
        );
        await setChar(response.data.data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    loadData();
  }, [charId, match.params.id]);

  if (loading === true) {
    return (
      <Loading>
        <FaSpinner />
      </Loading>
    );
  }

  return (
    <Container>
      <img
        src={`${char[0].thumbnail.path}/portrait_xlarge.${char[0].thumbnail.extension}`}
        alt={char[0].name}
      />
      <article>
        <h1>{char[0].name}</h1>
        <p>{char[0].description}</p>
        <ul>
          <h2>Aparece em: </h2>
          {char[0].stories.items.map((storie) => (
            <li key={char[0].id}>
              <span>{storie.name}</span>
            </li>
          ))}
        </ul>
      </article>
    </Container>
  );
}

export default Details;
