import React, { useEffect, useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';
import ListChars from '../../components/ListChars';
import api from '../../services/api';

import { Loading } from './styles';

function Main() {
  const [chars, setChars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState('');

  async function loadData() {
    try {
      if (search === '') {
        setLoading(true);
        const response = await api.get(
          `v1/public/characters?&limit=10&offset=${page}1&apikey=f0b2694de242923d1277ccb44958db7c`
        );
        await setChars(response.data.data);
        setLoading(false);
      } else {
        const response = await api.get(
          `/v1/public/characters?nameStartsWith=${search}&apikey=f0b2694de242923d1277ccb44958db7c`
        );
        await setChars(response.data.data);
      }
    } catch (error) {
      toast.error('Falha ao consultar dados');
    }
  }

  // Requisição a API
  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, search]);

  // Página Anterior
  function prevPage() {
    if (page !== 0) {
      setPage(page - 1);
    } else {
      toast.info('Você já está na página inicial');
    }
  }

  // Próxima Página
  function nextPage() {
    setPage(page + 1);
  }

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // Loading
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
        handleChange={handleChange}
        search={search}
      />
    </>
  );
}

export default Main;
