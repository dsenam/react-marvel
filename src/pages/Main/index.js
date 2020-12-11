import React, { useEffect, useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import ListChars from '../../components/ListChars';
import api from '../../services/api';

import { Loading } from './styles';

function Main() {
  const [chars, setChars] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadData() {
    try {
      setLoading(true);

      const response = await api.get(
        `https://gateway.marvel.com:443/v1/public/characters?limit=10&apikey=f0b2694de242923d1277ccb44958db7c`
      );
      await setChars(response.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  if (loading === true) {
    return (
      <Loading>
        <FaSpinner />
      </Loading>
    );
  }

  return (
    <>
      <ListChars chars={chars} />
    </>
  );
}

export default Main;
