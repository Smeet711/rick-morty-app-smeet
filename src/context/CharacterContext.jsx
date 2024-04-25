// context/CharacterContext.js
import React, { createContext, useState, useEffect } from 'react';

export const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState({ name: '', status: '', gender: '' });

  const fetchCharacters = () => {
    let url = 'https://rickandmortyapi.com/api/character';
    if (filter.name) url += `?name=${filter.name}`;
    if (filter.status) url += `${filter.name ? '&' : '?'}status=${filter.status}`;
    if (filter.gender) url += `${filter.name || filter.status ? '&' : '?'}gender=${filter.gender}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.error('Error fetching characters:', error));
  };

  useEffect(() => {
    fetchCharacters();
  }, [filter]);

  return (
    <CharacterContext.Provider value={{ characters, filter, setFilter, fetchCharacters }}>
      {children}
    </CharacterContext.Provider>
  );
};
