/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import { Container } from './styles';

function Details({ match }) {
  // const [loading, setLoading] = useState(true);
  const [char, setChar] = useState([]);
  const [charId, setCharId] = useState('');

  async function loadData() {
    try {
      // setLoading(true);
      setCharId(match.params.id);
      const response = await api.get(
        `https://gateway.marvel.com:443/v1/public/characters/${charId}?apikey=f0b2694de242923d1277ccb44958db7c
        `
      );
      await setChar(response.data.data.results);
      console.log(charId);
      // setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  // Requisição API
  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container>
      <img
        src="http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16/portrait_xlarge.jpg"
        alt="Imagem"
      />
      <button
        type="button"
        onClick={() => {
          console.log(char[0].name);
        }}
      >
        Click
      </button>
    </Container>
  );
}

export default Details;
