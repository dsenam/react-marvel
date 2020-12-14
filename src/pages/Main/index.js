import React, { useEffect, useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import ListChars from '../../components/ListChars';
import api from '../../services/api';

import { Loading } from './styles';

function Main() {
  const [chars, setChars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);

  async function loadData() {
    try {
      setLoading(true);

      const response = await api.get(
        `https://gateway.marvel.com:443/v1/public/characters?limit=10&offset=${page}1&apikey=f0b2694de242923d1277ccb44958db7c`
      );
      await setChars(response.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  // Requisição a API
  useEffect(() => {
    loadData();
  }, [page]);

  function prevPage() {
    if (page !== 0) {
      setPage(page - 1);
    } else {
      alert('Você já está na página inicial');
    }
  }

  function nextPage() {
    setPage(page + 1);
  }

  if (loading === true) {
    return (
      <Loading>
        <FaSpinner />
      </Loading>
    );
  }

  return (
    <>
      <ListChars
        chars={chars}
        prevPage={prevPage}
        nextPage={nextPage}
        page={page}
      />
    </>
  );
}

export default Main;
